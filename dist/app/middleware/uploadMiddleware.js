"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const path_1 = __importDefault(require("path"));
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
function uploadMiddleware(folderName) {
    const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
        cloudinary: cloudinary_1.default,
        params: (req, file) => {
            const folderPath = `${folderName.trim()}`; // Update the folder path here
            const fileExtension = path_1.default.extname(file.originalname).substring(1);
            const publicId = `${file.fieldname}-${Date.now()}`;
            return {
                folder: folderPath,
                public_id: publicId,
                format: fileExtension,
            };
        },
    });
    return (0, multer_1.default)({
        storage: storage,
        limits: {
            fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
        },
    });
}
exports.default = uploadMiddleware;
