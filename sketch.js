
let mic, amp, audioContext, amp_min = 0.017, amp_max = 0.5;
let haySonido, antesHabiaSonido;

let listaConjunto, cantidadConjuntos = 28, cantidadTrazos = 210;
let curvePoints1 = [], curvePoints2 = []; // Arrays para almacenar los puntos de las curvas 1 y 2

let cantidad_bkg = 3, img_bkg = [];

function preload(){
  
  listaConjunto = new Array();
  for(let i = 0; i < cantidadConjuntos; i++) {
    listaConjunto.push(new Conjunto());
  }

  for( let x=0 ; x<cantidad_bkg ; x++){ //3 textura background
    let nombre_bkg = "data/background_"+nf( x , 2 )+".png";
    img_bkg[x] = loadImage( nombre_bkg ); 
  }

}

function setup() {
  imageMode( CORNER );
  createCanvas(800, 970);
  background(59, 57, 86);
  
  //inicializo la escucha de sonido
  getAudioContext().resume();
	mic = new p5.AudioIn();
  mic.start();
	userStartAudio();

  antesHabiaSonido = false;
}

function draw() {
  //printData();
  amp = mic.getLevel();

  let inicioElSonido = haySonido && !antesHabiaSonido;
  let finDelSonido = !haySonido && antesHabiaSonido;

  haySonido = amp > amp_min;

  if( inicioElSonido ){  //crea fondo con textura
    imageMode( CORNER ); 
    tint(255);
    let cual_bkg = int( vol(cantidad_bkg));
    image(img_bkg[cual_bkg], 0, 0); 
  }

  if( haySonido ){   //inicia a pincelar/colorear
    actualizarAmp();
    cantidadConjuntos == +15;
    pinceladas();
    antesHabiaSonido = haySonido;
  }
}

function actualizarAmp(amp){ //mapea la amp para colores y formas 
  this.listaColores = map(amp_min, amp_max, 0, 6);
  this.cantidadConjuntos = map(amp_min, amp_max, 1, 28);
}

function pinceladas(){ //colores y pinceladas
  background(59, 57, 86);
  let listaColores = new Array();
  listaColores.push(color(173,140,89));
  listaColores.push(color(184,187,206));
  listaColores.push(color(80,134,160));
  listaColores.push(color(183,217,244));
  listaColores.push(color(162,196,195));

  let y = 0;
  let x = 0;
 
  for(let i = 0; i < cantidadConjuntos; i++) {
        
    tint(random(listaColores));
      
    // tamaño y forma de las curvas
    let minY = 430;
    let maxY = 2000;
    let minX = 450;
    let maxX = 900;
    let curva1 = [ random(minX, maxX) , random(minY,maxY) , 0 , 50 , 300 , 0 , random(minX, maxX) , random(minY,maxY) ];
    let curva2 = [ random(minX, maxX) , random(-maxY,minY) , 0 , 50 , 300 , 0 , random(minX, maxX) , random(-maxY,minY) ];

    if (i != 0 && i % 4 === 0) {
          
       y+=150; // distancia en vertical entre los conjuntos
       x= (i == 4 || i == 12) ? -150 : 0; 

    }else if(i !=0) {
      x+=250; //distancia en horizontal entre los conjuntos
     }
    listaConjunto[i].dibujar( x, y, cantidadTrazos , curva1 , curva2, i);
  }
}

function printData(){ //imprime la amp en consola
  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;
  let texto1;

  texto = 'amplitud :' + amp;
  text(texto,20,20);
}