import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

  // Configuration
  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // upload file on cloudinary
      const response= await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("file is uploaded", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)  // remove the temporary saved file as the upload operation got failed 
        return null
    }
}

cloudinary.v2.uploader.upload('https://images.pexels.com/photos/28451254/pexels-photo-28451254/free-photo-of-planning-and-productivity-with-a-calendar-and-pen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    {public_id: 'olympic_flag'},
    function(error, result) {console.log(result)}
)


export {uploadOnCloudinary}