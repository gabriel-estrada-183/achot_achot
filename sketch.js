
let c;
let listaConjunto;
let cantidadConjuntos = 28; 
let cantidadTrazos = 210;
let curvePoints1 = []; // Array para almacenar los puntos de la curva 1
let curvePoints2 = []; // Array para almacenar los puntos de la curva 2
let cantidad_bkg = 3;
let img_bkg = [];

function preload(){
  listaConjunto = new Array();
  for(let i = 0; i < cantidadConjuntos; i++) {
    listaConjunto.push(new Conjunto());
  }

  for( let x=0 ; x<cantidad_bkg ; x++){
    let nombre_bkg = "data/background_"+nf( x , 2 )+".png";
    img_bkg[x] = loadImage( nombre_bkg ); //textura background
  }

}

function setup() {
  //800
  imageMode( CORNER );
  createCanvas(800, 970);
  background(59, 57, 86);  
}

function draw() {

}

function mousePressed(){
  
  cantidadConjuntos == +15;
  background(59, 57, 86);  
  //fill(60,59,93);
 
  noStroke();
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


    } else if(i !=0) {
      
       x+=250; //distancia en horizontal entre los conjuntos
    }

    listaConjunto[i].dibujar( x, y, cantidadTrazos , curva1 , curva2, i);
  }
  imageMode( CORNER );
  tint(255);
  let cual_bkg = int( random(cantidad_bkg));
  image(img_bkg[cual_bkg], 0, 0); //filtro textura
  
}
