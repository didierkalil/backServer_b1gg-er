
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
console.log('server on port', app.get('port'));
});

const SocketIO = require('socket.io');
const io = SocketIO(server);
var estado1 = 0 ;
var estado2 = 0 ;
var estado3 = 0 ;

io.on('connection', (socket)=> {
     console.log("Nueva conexion");

    
    
//    Programación de las acciones a realizar tras recibir la orden de un botón           
    socket.on('datos', (data)=>{        
          
           if(data.mensage == '1') {
                console.log("prendido");
                io.sockets.emit('datos',{mensage: "uno"});
                estado1 = 1;
             
            }
             else if (data.mensage == '0'){
               console.log("apagado");
               io.sockets.emit('datos',{mensage: "cero"});
               estado1 = 0;                                    
            }

            else if (data.mensage == '3'){
                 console.log("prendido");
                 io.sockets.emit('datos',{mensage: "tres"}); 
                 estado2 = 1;                            
            }

            else if (data.mensage == '4'){
                   console.log("apagado");
                   io.sockets.emit('datos',{mensage: "cuatro"});
                   estado2 = 0;                                
            }

            else if (data.mensage == '5'){
               console.log("prendido");
               io.sockets.emit('datos',{mensage: "cinco"}); 
               estado3 = 1;                            
          }

          else if (data.mensage == '6'){
                 console.log("apagado");
                 io.sockets.emit('datos',{mensage: "seis"});
                 estado3 = 0;                                
          }
  
    })

//  Cuando recibo solicitud de status se le envían los datos del sistema
    socket.on('solicitud:status', (data)=>{                 
          io.sockets.emit('solicitud:status' + data.mensage, {objeto1: estado1, objeto2: estado2, objeto3: estado3});              
     })





   })

  




 

 
       
 

