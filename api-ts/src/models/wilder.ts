import mongoose from "mongoose";
import image, { IImage } from "./image";
import ImageSchema from "./image";

interface IWilder {
    name: string;
    city: string;
    skills: ISkill[];
    image: IImage
};

interface ISkill {
    title: string;
    votes: number;
};

// Schema
const Wilder = mongoose.model(
    "Wilder",
    new mongoose.Schema({
        name: {
            type: String, unique: true
        },
        city: String,
        skills: [{
            title: String,
            votes: Number
        }],
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    })
);
export default Wilder;

// Schema
// const Schema = mongoose.Schema;
// const WilderSchema = new Schema<IWilder>({
//     name: {
//         type: String, unique: true
//     },
//     city: String,
//     skills: [{
//         title: String,
//         votes: Number
//     }],
//     image: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Image"
//     }
// })
// const Wilder = mongoose.model("wilder", WilderSchema);
// export default { Wilder, WilderSchema }
