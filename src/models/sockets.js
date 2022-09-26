
class Sockets{
    constructor(io){
        this.io = io;
        this.socketEvents();
       
    }
    socketEvents(){
        //On connection
        this.io.on('connection',(socket)=>{
            //Escuchar evento server
            console.log('Cliente conectado')

        })
    }
}

module.exports = Sockets;