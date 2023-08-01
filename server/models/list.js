import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(
    {
        boardId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        position: {
            type: Number,
            default: 0,
            required: true,
        },
        cards: {
            type: [String],
        },
    },
    { timestamps: true }
);


export default mongoose.model("List, ListSchema");
