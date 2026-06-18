import mongoose from "mongoose";

const counterSchema = new mongoose.Schema(
{
    counterNumber: {
        type: Number,
        required: true,
        unique: true
    },

    counterName: {
        type: String,
        required: true
    },

    assignedStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    currentToken: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Token",
        default: null
    },

    status: {
        type: String,
        enum: ["OPEN", "CLOSED"],
        default: "OPEN"
    }

},
{
    timestamps: true
}
);

const Counter = mongoose.model(
    "Counter",
    counterSchema
);

export default Counter;