import socketIo from "socket.io";

const setupIo = server => {
  const io = socketIo(server);
  
  io.on("connection", socket => {
    console.log("a user connected");
    socket.on("disconnect", onDisconnect);
    socket.on('msg', msg => {
      console.log('message: ' + msg);
    });
    socket.broadcast.emit("res", "another user connected")
  });
}

  
const onDisconnect = () => {
  console.log("user disconnected");
};

export default setupIo;
