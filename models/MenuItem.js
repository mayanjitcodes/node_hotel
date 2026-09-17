import mongoose from "mongoose";
 

const menuItemSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        deafult:[],
    },
    num_sales:{
        type:Number,
        deafult:0,
    }

})

const MenuItem=mongoose.model('MenuItem',menuItemSchema);
export default MenuItem;