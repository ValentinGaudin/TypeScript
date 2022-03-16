import mongoose from "mongoose";

interface Iimage {
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
};

const Schema = mongoose.Schema;
const ImageSchema = new Schema<Iimage>({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
export default mongoose.model("image", ImageSchema);