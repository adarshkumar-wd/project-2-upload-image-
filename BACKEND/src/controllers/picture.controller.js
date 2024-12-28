import { pictureModel } from "../models/picture.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const uploadPicture = async (req, res) => {

    const pictureLocalPath = req.file?.path

    if (!pictureLocalPath) {
        return res.status(400).json({message: "Picture is required"});
    }


    const uploadPicture = await uploadOnCloudinary(pictureLocalPath)

    if (!uploadPicture) {
        return res.status(500).json({message: "Internal server error 1"});
    }

    const picture = await pictureModel.create({pictureName: uploadPicture.url})

    const pictureData = await pictureModel.findById(picture._id)

    if(!pictureData) {
        return res.status(500).json({message: "Internal server error 2"});
    }

    return res.status(201).json({picture: pictureData});

}