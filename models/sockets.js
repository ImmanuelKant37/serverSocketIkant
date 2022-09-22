const Personas = require('./personas'); 
class Sockets{
    constructor(io){
        this.io = io;
        this.socketEvents();
        this.personas = new Personas();
    }
    socketEvents(){
        //On connection
        this.io.on('connection',(socket)=>{
            //Escuchar evento server
            console.log('Cliente conectado')

            //Emitir al cliente conectado, todas las personas actuales
            const refresh = socket.emit('current-persons', this.personas.getPersonas());
            //Escuchar voto
            socket.on('votar-persona',(id)=>{
                this.personas.increaseVotes(id);
                this.io.emit('current-persons', this.personas.getPersonas());
            })

            socket.on('remover-persona',(id)=>{
                this.personas.removePersona(id);
                this.io.emit('current-persons', this.personas.getPersonas());
            })
            socket.on('cambiar-nombre',(data)=>{
                this.personas.changeName(data.id, data.nombre);
                this.io.emit('current-persons', this.personas.getPersonas());
            })
            socket.on('crear-persona',(name)=>{
                this.personas.addPersona(name);
                this.io.emit('current-persons', this.personas.getPersonas());
            })
        })
    }
}

module.exports = Sockets;