//Socket en produccion
const socket = io('https://my-socket-midi.herokuapp.com');
//Socket en desarrollo
//const socket = io('https://serversocketkant.netlify.app');
const formulario = document.querySelector('#miFormulario');
const mensajes = document.querySelector('#misMensajes');
const txtMensaje = document.querySelector('#txtMensaje');
socket.on('mensaje-bienvenida', ( data ) => {
   console.log( data )
});
setTimeout(() => {
   
   socket.emit('mensaje-cliente',{
       autor: 'Franci',
       mensaje: 'Testeo',
       id: socket.id
   })
}, 1000)

formulario.addEventListener('submit',(event)=>{
event.preventDefault();
const nuevoMensaje = txtMensaje.value;
 
socket.emit('mensaje-to-servidor',{
    autor: 'Franci',
    mensaje: nuevoMensaje,
    id: socket.id
})
}
)

socket.on('message', ( data ) => {
    console.log( data )
    mensajes.innerHTML += `<li>${data.mensaje}</li>`
 });

 socket.on('current-bands', ( data ) => {
    console.log( data )
    mensajes.innerHTML += `<li>${data.map(e=>" "+ e.name )}</li>`
 });