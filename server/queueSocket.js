let ioInstance = null;

export const initializeSocket = (io) => {

    ioInstance = io;

    io.on("connection", (socket) => {

        console.log(
            `Client Connected: ${socket.id}`
        );

        socket.on(
            "joinQueueRoom",
            (roomName) => {

                socket.join(roomName);

                console.log(
                    `${socket.id} joined ${roomName}`
                );

            }
        );

        socket.on(
            "disconnect",
            () => {

                console.log(
                    `Client Disconnected: ${socket.id}`
                );

            }
        );

    });

};

export const getIO = () => {

    if (!ioInstance) {

        throw new Error(
            "Socket.io not initialized"
        );

    }

    return ioInstance;
};