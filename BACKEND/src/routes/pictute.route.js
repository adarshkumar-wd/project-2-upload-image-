import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadPicture } from "../controllers/picture.controller.js";

const router = Router();

router.route("/upload-picture").post(
    upload.single("picture"),
    uploadPicture
)

export default router;