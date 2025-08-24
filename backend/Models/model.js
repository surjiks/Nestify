import mongoose, { Schema, model } from "mongoose";

//signup
const details = new Schema({
    userName:{type:String,unique:true,required:true},
    email:String,
    password:String,
    userRole:String
},{
  versionKey: false   // this removes __v everywhere
})
const signup = model('Sign Up',details) 

//add property
const property = new Schema({
    Category:String,
    Type:String,
    BHK:String,
    Bathrooms:String,
    PArea:String,
    ProjectName:String,
    Title:String,
    Description:String,
    Price:Number,
    Phone:Number,
    AadharNo:Number,
    TaxNo:String,
        area: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
    PropertyImage:String,
    AadharCard:String,
    TaxReciept:String,
    status:String,
    userName:String,
    Date:Date,
    IssueDate:Date,
    DueDate:Date,
    Premium:{type:Boolean, default: false},
    Plan:{type:String, default: "Free"}
})
const AddProperty = model('Property',property)

//Enquiry
const enquiry = new Schema({
    date:Date,
    propertyid:String,
    projectName:String,
    OwnerName:String,
    fullName:String,
    phoneNumber:Number,
    intrest:String
})
const Enquiry = model('Enquiry',enquiry)

//premium
const payment = new Schema({
    UserName:String,
    PropertyId:String,
    Plan:String,
    date:Date
})
const Premium = model('Premiums',payment)

//wishlist
const wishlist = new Schema({
    UserName:String,
    Property:{type:mongoose.Schema.Types.ObjectId, ref: "Property"}
})
const Wishlist = model('Wishlist',wishlist)

//feedback
const feedback = new Schema({
    Name : String,
    Email : String,
    Feedback : String
})
const Feedback = model('Feedback',feedback)


export {signup, AddProperty, Enquiry, Premium, Wishlist, Feedback}