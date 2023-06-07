import mongoose from "mongoose";



const PgSchema= mongoose.Schema(
    {
        title:String,
        location:String,
        Amenities:String,
        price:Number,
        occupancy:String,
        cover_img:String,
        img_array:[String],
        details:String,
        food_menu:[Object],
        gender:String,
        position:{
            lat:Number,
            lng:Number
        },
        gml:String,
        booked:String,
    }
)



const pg= mongoose.model("pg",PgSchema);

export default pg;