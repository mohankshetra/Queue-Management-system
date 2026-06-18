import Token from "../models/Token.js";
import { getIO }from "../sockets/queueSocket.js";

export const generateToken =
async (req, res) => {

    try {

        const lastToken =
            await Token.findOne()
            .sort({ tokenNumber: -1 });

        const nextNumber =
            lastToken
                ? lastToken.tokenNumber + 1
                : 1;

        const token =
            await Token.create({
                tokenNumber: nextNumber,
                user: req.user._id
            });
        const io = getIO();

             io.emit(
                     "tokenGenerated",
            {
                tokenNumber:token.tokenNumber,
                status:token.status
    }
);

        res.status(201).json(token);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

export const getAllTokens =
async (req, res) => {

    try {

        const tokens =
            await Token.find()
            .populate("user", "name")
            .sort({ createdAt: 1 });

        res.json(tokens);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

export const callNextToken =
async (req, res) => {

    try {
        

        const token =
            await Token.findOne({
                status: "WAITING"
            })
            .sort({ createdAt: 1 });

        if (!token) {

            return res.status(404).json({
                message: "No Tokens Available"
            });

        }

        token.status = "SERVING";

        await token.save();
        const io = getIO();

        io.emit(
            "tokenCalled",
            token
     );

        res.json(token);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

export const completeToken =
async (req, res) => {

    try {

        const token =
            await Token.findById(
                req.params.id
            );

        if (!token) {

            return res.status(404).json({
                message: "Token Not Found"
            });

        }

        token.status = "COMPLETED";

        await token.save();
        const io = getIO();

        io.emit(
            "tokenCompleted",
            token
        );

        res.json(token);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};