const io = require('socket.io')(process.env.PORT || 3000);
//save all users register
const arrUserInfo = [];

io.on('connection',socket => {
    socket.on('USER_REGISTER',user => {
        const isExist = arrUserInfo.some(e => e.ten === user.ten);
        socket.peerId = user.peerId;
        if (isExist) return socket.emit('REGISTER_FAILE');
        //if ok
        arrUserInfo.push(user);
        socket.emit('ONLINE_USERS', arrUserInfo);
        socket.broadcast.emit('NEW_USER', user);
    });


    //listen for disconnected
    socket.on('disconnect', () => {
        //get the index from the arrUserInfo
        const index = arrUserInfo.findIndex(user => user.peerId === socket.peerId);
        arrUserInfo.splice(index, 1);
        //emit disconnected
        io.emit('USER_DISCONNECTED', socket.peerId);
    });
})