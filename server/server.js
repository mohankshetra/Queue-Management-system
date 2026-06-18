import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js";
import counterRoutes from "./routes/counterRoutes.js";

import {
    initializeSocket
} from "./sockets/queueSocket.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

const server =
    http.createServer(app);

const io = new Server(server, {

    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }

});

initializeSocket(io);

app.get("/", (req, res) => {

    res.json({
        success: true,
        message:
            "Smart Queue Management API Running"
    });

});

app.use("/api/auth", authRoutes);
app.use("/api/tokens", tokenRoutes);
app.use("/api/counters", counterRoutes);

const PORT =
    process.env.PORT || 5000;

server.listen(PORT, () => {

    console.log(
        `Server Running On Port ${PORT}`
    );

});