const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ 
  cloud_name: 'drshjpyye', 
  api_key: '338123261399514', 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'pet_profiles',
    format: async (req, file) => 'jpeg', 
    public_id: (req, file) => file.fieldname + '-' + Date.now(),
  },
});

const upload = multer({ storage: storage });

module.exports = upload;