import mongoose from "mongoose";



const PgSchema= mongoose.Schema(
    {
        Title:String,
        Location:String,
        Amenities:[String],
        Price:String,
        Occupancy:[String],
        cover_img:String,
        img_array:[String]
    }
)



const pg= mongoose.model("pg",PgSchema);

export default pg;