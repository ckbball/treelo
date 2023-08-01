import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
    {
        listId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        dueDate: {
            type: String,
        },
        reminderDate: {
            type: String,
        },
    },
    { timestamps: true }
);


export default mongoose.model("Card, CardSchema");
