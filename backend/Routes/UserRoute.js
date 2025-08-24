import { Router } from "express";
import { AddProperty,Enquiry,Premium, Wishlist, Feedback} from "../Models/model.js";
import upload from "../Middleware/upload.js";
import UserCheck from "../Middleware/user.js";

const user = Router();

const convertToBase64 = (buffer)=>{
    return buffer.toString('base64');
}

//sell property
user.post("/SellProperty",UserCheck,upload.fields([{name: "PropertyImage"},{name: "AadharCard"},{name: "TaxReceipt"}]),async(req,res)=>{
    try{
    const UserName = req.name;
    const {Category,Type,BHK,Bathrooms,PArea,ProjectName,Title,Description,Price,Phone,AadharNo,TaxNo,Area,City,State,Pincode} = req.body
    const result = await AddProperty.findOne({userName:UserName, status:{$in:["Active","Pending"]}})
    if(result){
        if(result.status == "Pending" || result.status == "Active")
        res.status(404).json({msg:"You can add a new property only after the current listing has expired."})
    }else{
        
        let propertyImage = null;
        let aadharCard = null;
        let taxReceipt = null;


        if (req.files && req.files["PropertyImage"]) {
            propertyImage = convertToBase64(req.files["PropertyImage"][0].buffer);
        }

        if (req.files && req.files["AadharCard"]) {
            aadharCard = convertToBase64(req.files["AadharCard"][0].buffer);
        }

        if (req.files && req.files["TaxReceipt"]) {
            taxReceipt = convertToBase64(req.files["TaxReceipt"][0].buffer);
        }


    const newProperty = new AddProperty({
        Category:Category,
        Type:Type,
        BHK:BHK,
        Bathrooms:Bathrooms,
        PArea:PArea,
        ProjectName:ProjectName,
        Title:Title,
        Description:Description,
        Price:Price,
        Phone:Phone,
        AadharNo:AadharNo,
        TaxNo:TaxNo,
        area: Area,
        city: City,
        state: State,
        pincode: Pincode,
        PropertyImage:propertyImage,
        AadharCard:aadharCard,
        TaxReciept:taxReceipt,
        status:"Pending",
        userName:UserName,
        Date:new Date()
    })
    await newProperty.save();
    res.status(200).json({msg:"Property added successfully. It will be visible to the public once approved."})
    }}catch(err){
        console.log(err);
    }
})

//edit property
user.put('/EditProperty/:id',UserCheck,async(req,res)=>{
    try{
    const UserName = req.name
    const PropertyId = req.params.id
    const {newCategory,newType,newBHK,newBathrooms,newProjectArea,newProjectName,newTitle,newDescription,newPrice} = req.body
    console.log(UserName,PropertyId);
    const result = await AddProperty.findOne({_id:PropertyId,userName:UserName})
    console.log(result);
    if(!result){
        res.status(200).json({msg:"Property not found"})
    }else{
    
    if(result.status == "Pending" || result.status == "Active"){
    
        result.Category = newCategory,
        result.Type = newType,
        result.BHK = newBHK,
        result.Bathrooms = newBathrooms,
        result.PArea = newProjectArea,
        result.ProjectName = newProjectName,
        result.Title = newTitle,
        result.Description = newDescription,
        result.Price = newPrice

        await result.save()
        res.status(200).json({msg:"Property Updated Sucessfully"})

    }else if(result.status == "Expired"){
        res.status(400).json({msg:"Listing is Expired! caun't edit"});
    }else{
        res.status(404).json({msg:"Listing not found"})
    }
    }}catch(error){
        console.log(error);
        res.status(500).json({msg:"Something went wrong"})        
    }
    
})

//delete peroerty
user.delete('/DeleteProperty/:id',UserCheck,async(req,res)=>{
    try{
    const UserName = req.name
    const PropertyId = req.params.id
    const result = await AddProperty.findOne({userName:UserName, _id:PropertyId})

    if(!result){
        res.status(404).json({msg:"Property not Found"})
    }else{
    await AddProperty.deleteOne({_id:PropertyId})
    res.status(200).json({msg:"Property deleted Sucessfully"})
    }

    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Something went wrong"})
    }
})

//buy property
user.get('/BuyProperty',UserCheck,async(req,res)=>{
    try{
    const properties = await AddProperty.find({status:"Active"},{PropertyImage:0,AadharCard:0,TaxReciept:0,_id:0,__v:0})
    if(properties.length==0){
        res.status(404).json({msg:"No properties Listed"})
    }
    const HousesAndVillas = properties.filter(value=>value.Category=="house/apartment")
    const LandAndPlots = properties.filter(value=>value.Category=="land/plot")
    res.status(200).json({HousesAndVillas,LandAndPlots})
    console.log(HousesAndVillas,LandAndPlots);
    }catch(err){
        console.log(err);
    }       
})

//View selected property and send enquiry
user.post('/ViewAndEnquiry',UserCheck,async(req,res)=>{
    try{
    const {PropertyId,FullName, PhoneNumber, Intrest} = req.body
    const result = await AddProperty.findOne({_id:PropertyId , status:"Active"})
    
    if(!result){
        res.status(404).json({msg:"Error in property id"})
    }else{
    const newEnquiry = new Enquiry({
        date:new Date(),
        propertyid:PropertyId,
        projectName:result.ProjectName,
        OwnerName:result.userName,
        fullName:FullName,
        phoneNumber:PhoneNumber,
        intrest:Intrest
    })
    await newEnquiry.save();
    res.status(200).json({msg:"Enquiry send sucessfully"})
    }
    }catch(err){
        console.log(err);
    }
})

//view enquiry
user.get('/ViewEnquiry',UserCheck,async(req,res)=>{
    try {
        const UserName = req.name;
       const result = await Enquiry.find({OwnerName:UserName})
       if(result.length == 0 ){
        res.status(404).json({msg:"Your have no Enquries"})
        console.log("Your have no Enquries");
        
       }else{
        res.status(200).json(result)
        console.log(result);
       }
    } catch (error) {
        console.log(error);
    }
})


//my property
user.get('/myProperty',UserCheck,async(req,res)=>{
    const UserName = req.name
    
    const date = new Date();
    await AddProperty.updateMany({userName:UserName, DueDate:{$lt:date}} , {$set: {status:"Expired"}})
    const result = await AddProperty.find({userName:UserName},{PropertyImage:0,AadharCard:0,TaxReciept:0,_id:0,__v:0})
    if(result.length==0){
        res.status(404).json({msg:"You have no listing"})
        console.log("You have no listing");   
    }else{
        res.status(200).json(result)
         console.log(result);
    }
})

//premium
user.get('/dummyPayment/:id',UserCheck,async(req,res)=>{
    try{
    const UserName = req.name
    const PropertyId = req.params.id
    const {Plan,CardNumber,ExpiryDate,CVV} = req.body

    let extendedMonth = 1
    let selectedPlan = "Free"
    if(Plan == "silver"){
        extendedMonth = 2
        selectedPlan = "silver"
    }else if(Plan == "gold"){
        extendedMonth = 3
        selectedPlan = "gold"
    }else{
        res.status(400).json({msg:"Wrong Plan"})
    }

    const Property = await AddProperty.findOne({_id:PropertyId, userName:UserName,status:"Active", Plan:"Free"})
    if(!Property){
        res.status(400).json({msg:"Property not found or Your already take premium"})
    }else{
        let newDueDate = new Date(Property.DueDate)
        newDueDate.setMonth(newDueDate.getMonth()+extendedMonth)

        Property.DueDate = newDueDate;
        Property.Premium = true;
        Property.Plan = selectedPlan;

        await Property.save();
        
        const newPayment = new Premium({
            UserName:UserName,
            PropertyId:PropertyId,
            Plan:Plan,
            date:new Date()
        })
        await newPayment.save();
        res.status(200).json({msg:`Payment successful! Property upgraded to ${selectedPlan} plan.`})
    }
    }catch(error){
        console.log(error);
    }
})

//wishlist
user.post('/Wishlist/:id',UserCheck,async(req,res)=>{
    try{
    const UserName = req.name
    const PropertyId = req.params.id
    
    const result = await Wishlist.findOne({UserName:UserName, Property:PropertyId})
    if(result){
        await Wishlist.deleteOne({UserName:UserName, Property:PropertyId})
        res.status(200).json({msg:"Wishlist removed"})
    }else{
        const newWishlist = new Wishlist({
            UserName:UserName,
            Property:PropertyId
        })
        await newWishlist.save();
        res.status(200).json({msg:"Wishlist Added"})
    }
    }catch(error){
        console.log(error);
    }
})

//View Wishlist
user.get('/Wishlist',UserCheck,async(req,res)=>{
    try{
    const UserName = req.name
    const wishlist = await Wishlist.find({UserName:UserName},{_id:0,__v:0,UserName:0})
    .populate({path:"Property",select: "Category Type Description Price Location -_id"});
    if(wishlist.length==0){
        
        res.status(200).json({msg:"Your wishlist is Empty"})
    
    }else{
        res.status(200).json(wishlist)
        console.log(wishlist);
    }
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Something went wrong"})
    }
    
})

//send feedback 
user.post('/Feedback',UserCheck,async(req,res)=>{
    try{
    const {Name,Email,feedback} = req.body
    const newFeedback = new Feedback({
        Name : Name,
        Email : Email,
        Feedback : feedback
    })
    await newFeedback.save();
    res.status(200).json({msg:"Feedback send Sucessfully"})
    const feedbacks = await Feedback.find();
    console.log(feedbacks);
        }catch(error){
            console.log(error);
        }
})

//chat
user.post('/Chat/:id',UserCheck,async(req,res)=>{
    const PropertyId = req.params.id
    const result = await AddProperty.findOne({_id:PropertyId, status:"Active"})

    if(!result){
        res.status(400).json({msg:"Property not Found"})
    }else{
    res.status(200).json({msg:`https://web.whatsapp.com/send?phone=${result.Phone}&text=hello`})
    console.log(`https://web.whatsapp.com/send?phone=${result.Phone}&text=hello`);
    
    }
})

//filter
user.get('/Filter',UserCheck,async(req,res)=>{
    try{
    const {area,type,price} = req.query
    
    let filter = { status:"Active" }  //filter is an object 
    if(area) filter.area = area
    if(type) filter.Type = type
    if(price) filter.Price = price  

    const result = await AddProperty.find(filter,{PropertyImage:0,AadharCard:0,TaxReciept:0})
    if(result.length == 0){
         console.log("No active properties found");
        return res.status(404).json({ msg: "No active properties found" });
    }
    res.status(200).json(result);
    console.log(result);

    }catch(error){
        console.log(error);
    }
    
})
export default user