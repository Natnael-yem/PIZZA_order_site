import multer from 'multer';

// Set up memory storage (if you plan to store the file as binary data in the database)
const storage = multer.memoryStorage();

// Initialize upload middleware
export const upload = multer({ storage: storage });
