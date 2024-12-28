import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: "adarshkumar",
    api_key: 131234911849152,
    api_secret: "fCNZAXu9CXQHjQvasQNiCqZRVDo"
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath || !fs.existsSync(localFilePath)) {
            console.error("File does not exist:", localFilePath);
            return undefined;
        }

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
            
        });

        // console.log("Upload result:", result);

        
        await fs.promises.unlink(localFilePath);

        return result;

    } catch (error) {
        console.error("Error during file upload:", error);
        try {
            await fs.promises.unlink(localFilePath); 
        } catch (unlinkError) {
            console.error("Error while deleting file:", unlinkError);
        }
        return null;
    }
};

export { uploadOnCloudinary };
