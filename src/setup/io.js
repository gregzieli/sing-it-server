import socketIo from "socket.io";
import { server } from "../app";

const io = socketIo(server);

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("disconnect", onDisconnect);
});

const onDisconnect = () => {
  console.log("user disconnected");
};

export default io;
