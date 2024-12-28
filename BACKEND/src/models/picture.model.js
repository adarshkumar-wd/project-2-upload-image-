import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema({

    pictureName : {
        type : String,
        required : true
    }
    
});

export const pictureModel = mongoose.model("Picture", pictureSchema);