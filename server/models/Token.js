import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
{
    tokenNumber: {
        type: Number,
        required: true,
        unique: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    counter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Counter",
        default: null
    },

    status: {
        type: String,
        enum: [
            "WAITING",
            "SERVING",
            "COMPLETED",
            "SKIPPED",
            "CANCELLED"
        ],
        default: "WAITING"
    },

    estimatedWaitTime: {
        type: Number,
        default: 0
    }

},
{
    timestamps: true
}
);

const Token = mongoose.model("Token", tokenSchema);

export default Token;