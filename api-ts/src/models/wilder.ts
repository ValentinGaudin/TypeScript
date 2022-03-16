import mongoose from "mongoose";

interface ISkill {
    title: string;
    votes: number;
};
interface IWilder {
    name: string;
    city: string;
    skills: ISkill[];
};

const Schema = mongoose.Schema;
const WilderSchema = new Schema<IWilder>({
    name: {
        type: String, unique: true
    },
    city: String,
    skills: [{
        title: String,
        votes: Number
    }],
});
export default mongoose.model("wilder", WilderSchema);
