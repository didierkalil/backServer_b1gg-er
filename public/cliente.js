// Configuración del socket externo
//  const socket = io('https://servidor-externo.herokuapp.com/')
  //  const socket = io();

// Declaración de botones
   const botonswitch = document.getElementById('switch');
   const botonswitch2 = document.getElementById('switch2');
   const botonswitch3 = document.getElementById('switch3');

   const boton = document.getElementById('botoncito');
   const boton2 = document.getElementById('botoncito2');

   const boton3 = document.getElementById('botoncito3');
   const boton4 = document.getElementById('botoncito4');


// var estadoswitch = 0;
// var estadoswitch2 = 0;
 //Programación del evento click para el switch.
//  botonswitch.addEventListener('click', function (e){               

//   if (estadoswitch == 0){
//     socket.emit('datos', {mensage: "1"});
//   }

//   if (estadoswitch == 1){
//     socket.emit('datos', {mensage: "0"});
//   }

//  });






 class inter {
  constructor (algo, palabraprendido, palabraapagado, numeroprendido, numeroapagado, nombreobjeto) {
    this.algo = algo;
    this.palabraprendido = palabraprendido;
    this.palabraapagado = palabraapagado;
    this.numeroprendido = numeroprendido;
    this.numeroapagado = numeroapagado;
    this.nombreobjeto = nombreobjeto;
    var estadoswitch = 0;
  }
  funcion() {
   var estadoswitch = this.estadoswitch;
   var contenido = this.numeroprendido;
   var contenido2 = this.numeroapagado;
   var identificador; 
   var nombreobjeto = this.nombreobjeto;
     const socket = io('https://servidor-externo.herokuapp.com/');
    // const socket = io();
   $(this.algo).on( 'click', function() {

     if (estadoswitch == 0){
       socket.emit('datos', {mensage: contenido});
     }
   
     if (estadoswitch == 1){
       socket.emit('datos', {mensage: contenido2});
     }
 
     });

     socket.on('datos', (datas) => {
       if (datas.mensage == this.palabraprendido) {
           console.log(this.palabraprendido); 
           $(this.algo).addClass("toggle-on");
           estadoswitch = 1;
        }
   
       if (datas.mensage == this.palabraapagado) {
           console.log(this.palabraapagado);
           $(this.algo).removeClass("toggle-on");
           estadoswitch = 0;
        }
       })


       
       socket.on('connect', () => {
           identificador = socket.id;
           
          //  var estadoswitch = this.estadoswitch;
           socket.emit('solicitud:status', {mensage: identificador});
 

           socket.on('solicitud:status' + identificador, (datas) => {
             console.log(datas);
             if (datas[nombreobjeto] == 1) {
                  $(this.algo).addClass("toggle-on");
                  estadoswitch = 1;
             }
 
             if (datas[nombreobjeto] == 0) {
                  $(this.algo).removeClass("toggle-on");
                  estadoswitch = 0;
             }

            })
          })
 
 
  };
 }


function crear (algo, palabraprendido, palabraapagado, numeroprendido, numeroapagado, nombreobjeto) {
var algo = new inter (algo, palabraprendido, palabraapagado, numeroprendido, numeroapagado, nombreobjeto);
algo.funcion();
return algo;
}

 const primer_interruptor = crear('#switch', 'uno', 'cero', "1", "0", 'objeto1');
 
 const segundo_interruptor = crear('#switch2', 'tres', 'cuatro',"3", "4", 'objeto2');

 const tercer_interruptor = crear('#switch3', 'cinco', 'seis',"5", "6", 'objeto3');
 







  //Programación del evento click para el switch.
  // botonswitch2.addEventListener('click', function (e){               
    
  //   if (estadoswitch2 == 0){
  //     socket.emit('datos', {mensage: "3"});
  //   }
  
  //   if (estadoswitch2 == 1){
  //     socket.emit('datos', {mensage: "4"});
  //   }
  
  //  });
  


// Programación de botones:
//  ******************************************            boton 1
  //  boton.addEventListener('click', function (){
  //   socket.emit('datos', {mensage: "1"}); 
  //  });

   $('#botoncito').on( 'click', function() {

    socket.emit('datos', {mensage: "1"}); 

    });

   
   
   //  ******************************************         boton 2
   boton2.addEventListener('click', function (){
       socket.emit('datos', {mensage: "0"});
      });
   

      //  ******************************************      boton 3
   boton3.addEventListener('click', function (){
     socket.emit('datos', {mensage: '3'});    
   });

        
   //  ******************************************         boton 4
    boton4.addEventListener('click', function (){
      socket.emit('datos', {mensage: '4'});    
    });
      
   //  Sección de respuesta para las escuchas de los estados
      // socket.on('datos', (datas) => {
      //  if (datas.mensage == 'uno') {
      //      console.log("uno"); 
      //      $('#switch').addClass("toggle-on");
      //      estadoswitch = 1;
      //   }
   
      //  if (datas.mensage == 'cero') {
      //      console.log("cero");
      //      $('#switch').removeClass("toggle-on");
      //      estadoswitch = 0;
      //   }
  
      //  if (datas.mensage == 'tres') {
      //     console.log("tres");
      //     $('#switch2').addClass("toggle-on");
      //     estadoswitch2 = 1;
      //   }

      //   if (datas.mensage == 'cuatro') {
      //   console.log("cuatro");
      //   $('#switch2').removeClass("toggle-on");
      //   estadoswitch2 = 0;
      //   }

       
      // });
   
      // ****************************       Sección solicitud de estado del sistama
      // var identificador;  
      // socket.on('connect', () => {
      //     identificador = socket.id;
      //     socket.emit('solicitud:status', {mensage: identificador});

      //     socket.on('solicitud:status' + identificador, (datas) => {
      //       console.log(datas);

      //       if (datas.objeto1 == 1) {
      //            $('#switch').addClass("toggle-on");
      //            estadoswitch = 1;
      //       }

      //       if (datas.objeto1 == 0) {
      //            $('#switch').removeClass("toggle-on");
      //            estadoswitch = 0;
      //       }

      //       if (datas.objeto2 == 1) {
      //         $('#switch2').addClass("toggle-on");
      //         estadoswitch2 = 1;
      //       }

      //       if (datas.objeto2 == 0) {
      //         $('#switch2').removeClass("toggle-on");
      //         estadoswitch2 = 0;
      //       }

      //     })
      // })

     
   





