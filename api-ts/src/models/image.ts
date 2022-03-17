import mongoose from "mongoose";

export interface IImage {
    name: String,
    description: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
};

// Model 
const Image = mongoose.model(
    "Image",
    new mongoose.Schema({
        name: String,
        description: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    })
);
export default Image;

// Schema
// const Schema = mongoose.Schema;
// const ImageSchema = new Schema<IImage>({
//     name: String,
//     description: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
// const Image =  mongoose.model("Image", ImageSchema);
// export default { Image, ImageSchema }
