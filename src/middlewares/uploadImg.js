import multer from "multer";
import path from "path";
import fs from "fs";

// Configurar almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), "src/public/img"));
    },
    filename: (req, file, cb) => {
        const uploadDir = path.join(process.cwd(), "src/public/img");
        let filename = file.originalname;
        const fullPath = path.join(uploadDir, filename);

        if (fs.existsSync(fullPath)) {
            req.fileAlreadyExists = true;
        }

        cb(null, filename);
    }
});

// Exportar middleware
const upload = multer({
    storage,
    limits: {fileSize: 5 * 1024 * 1024}, // 5MB
    fileFilter: function (req, file, cb) {
        // Validar solo imágenes
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(null, false); // ❗ Si no es imagen, ignorarlo
        }
    },
});

export default upload;