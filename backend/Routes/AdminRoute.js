import { Router } from "express";
import { AddProperty, Feedback, Premium, signup } from "../Models/model.js";
import AdminCheck from "../Middleware/admin.js";

const admin = Router();

admin.get('/ViewProperty',AdminCheck,async(req,res)=>{
    try {
        const result = await AddProperty.find({status:'Pending'})
        console.log(result);
        if(result.length==0){
        res.status(404).json({msg:"No Pending Property Found"})
    }
    res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

admin.post("/ApproveProperty/:id",AdminCheck,async(req,res)=>{
    try{
    const PropertyId = req.params.id
   const result = await AddProperty.findOne({_id:PropertyId})
   if(result){
        if(result.status == "Pending"){
            
            const issueDate = new Date() //This creates a new Date object with the current date and time
            const dueDate = new Date(issueDate);  //This creates a copy of the issueDate objec
            dueDate.setMonth(dueDate.getMonth() + 1); //.getMonth() returns the month number (0 for January, 1 for February, etc.)  .setMonth() sets the month, and here we’re adding 1 month to the current month.

            await AddProperty.updateOne({_id:PropertyId},{$set:{status:"Active", IssueDate:issueDate, DueDate:dueDate}})
            res.status(200).json({msg:"Listing approved !"})
        }else{
            res.status(404).json({msg:"Already approved"})
            console.log("Already approved");
        }
   }else{
    console.log("not found");
    
   }
   }catch(err){
    console.log(err);
   }
})

admin.post('/RejectProperty/:id',AdminCheck,async(req,res)=>{
    try{
    const PropertyId = req.params.id
   const result = await AddProperty.findOne({_id:PropertyId})
   if(result){
        if(result.status == "Pending"){

            await AddProperty.updateOne({_id:PropertyId},{$set:{status:"Rejected"}})
            res.status(200).json({msg:"Listing Rejected !"})
        }else{
            res.status(404).json({msg:"Already approved/Rejected"})
            console.log("Already approved/Rejected");
        }
   }
   }catch(err){
    console.log(err);
   }

})

//view users
admin.get('/ViewUsers',AdminCheck,async(req,res)=>{
    const result = await signup.find({userRole:"user"})
    if(result.length==0){
        res.status(404).json({msg:"No Users Found"})
    }
    res.status(200).json(result)
    
})

//view all properties
admin.get('/ViewAllProperties',AdminCheck,async(req,res)=>{
    try{
    const result = await AddProperty.find({status:"Active"})
    if(result.length==0){
        res.status(404).json({msg:"No Properties !!!"})
    }else{
    res.status(200).json(result)
    }
    }catch(error){
        console.log(error);   
    }
})

//view selected property
admin.get("/SelectedProperty/:id",AdminCheck,async(req,res)=>{
    const PropertyId = req.params.id
    const property = await AddProperty.findOne({_id:PropertyId})
    if(!property){
        res.status(404).json({msg:"Property Not Found"})
    }else{
        res.status(200).json(property)
    }
})


admin.get("/PropertyImages/:id", async (req, res) => {
  try {
    const propertyId = req.params.id
    const property = await AddProperty.findOne({_id:propertyId});

    if (!property) {
      return res.status(404).json({ msg: "Property not found" });
    }

    res.status(200).json({
      PropertyImage: property.PropertyImage || null,
      AadharCard: property.AadharCard || null,
      TaxReceipt: property.TaxReciept || null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});



//View Feedback
admin.get('/AFeedback',AdminCheck,async(req,res)=>{
    try{
        const result = await Feedback.find()
        if(result.length==0){
           res.status(404).json({msg:"No Feedback !!!"}) 
        }else{
            console.log(result);
        res.status(200).json(result)
        }
    }catch(error){
        console.log(error);
    }
})

//Delete Feedback
admin.delete('/DeleteFeedback/:id',AdminCheck,async(req,res)=>{
    try {
        const FeedbackId = req.params.id
        const result = await Feedback.deleteOne({_id:FeedbackId})
        if(result.deletedCount==0){
            res.status(404).json({msg:"No Feedback Found"})
        }else{
            res.status(200).json({msg:"Feedback Deleted Sucessfully"}) 
        }
    } catch (error) {
        console.log(error);   
    }
})

//View Premium Members
admin.get('/ViewPremiumMembers',AdminCheck,async(req,res)=>{
    try{
        const result = await Premium.find()
        if(result.length==0){
            res.status(404).json({msg:"No Premium Users"})
        }else{
            res.status(200).json(result)
        }
    }catch(error){
        console.log(error);  
    }
})

admin.get('/UserProperty/:userName',async(req,res)=>{
    const UserName = req.params.userName;
    const date = new Date();

    await AddProperty.updateMany({ userName:UserName, DueDate: { $lt: date } },{ $set: { status: "Expired" } });
    const result = await AddProperty.find({userName:UserName})

     if (result.length === 0) {
    return res.status(404).json({ msg: "No listings found for this user" });
     }

     res.status(200).json(result);
})


export default admin