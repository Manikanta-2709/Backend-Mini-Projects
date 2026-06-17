const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema(
    {
        name:{
            type:String
        },
        cast:{
            Type:String
        },
        genre:{
            type:String
        },
        language:{
            type:String
        },
        year:{
            type:Number
        }
    }
)
module.exports=mongoose.model("Movie",movieSchema);