import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema(
    {
        ownerUserId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        boardMembers: {
            type: [String],
        },
        boardLists: {
            type: [String],
        },
        isPublic: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);


export default mongoose.model("Board, BoardSchema");
