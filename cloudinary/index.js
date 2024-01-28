const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name:'dfqfvzfje',
  api_key:'212924178667148',
  api_secret:'4mgAWGFKOBwIxJcS7W0zF1IFyio',
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Campistan",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
