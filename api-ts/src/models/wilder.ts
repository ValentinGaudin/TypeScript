import mongoose from "mongoose";

const Schema = mongoose.Schema;
const WilderSchema = new Schema({
    name: {
        type: String, unique: true
    },
    city: String,
    skills:[{
        title: String,
        votes: Number
    }],
});
export default mongoose.model("wilder", WilderSchema);
