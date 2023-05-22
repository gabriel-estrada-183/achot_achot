

class Conjunto{

    constructor(){
        this.trazos = [];
        this.cantidad = 25;
        for( let i=0 ; i<this.cantidad ; i++ ){
            this.trazos[ i ] = loadImage( "data/t_"+nf( i , 2 )+".png" );
           // let nombre = "data/low/t_"+nf( i , 2 )+".png";
        }
    }

   /* for( let i=0 ; i<cantidad ; i++){
        let nombre = "data/t_"+nf( i , 2 )+".png";
        trazos[i] = loadImage( nombre );
      }
      
      for( let x=0 ; x<cantidad_bkg ; x++){
        let nombre_bkg = "data/background_"+nf( x , 2 )+".png";
        img_bkg[x] = loadImage( nombre_bkg ); //textura background
      }*/

    dibujar( x , y , cantidadTrazos , curva1 , curva2, i){

        imageMode( CENTER );

        for(let i=0 ; i<cantidadTrazos ; i++ ){
            let cual = int( random(this.cantidad ));

            let t = map( i+1 , 0 , cantidadTrazos+1 , 0 , 1 );

            let x1 = curvePoint( curva1[0] , curva1[2] , curva1[4] , curva1[6] , t );
            let y1 = curvePoint( curva1[1] , curva1[3] , curva1[5] , curva1[7] , t );

            let x2 = curvePoint( curva2[0] , curva2[2] , curva2[4] , curva2[6] , t );
            let y2 = curvePoint( curva2[1] , curva2[3] , curva2[5] , curva2[7] , t );

            let h = abs(y2-y1);

            let w = map( h , 0 , this.trazos[cual].height , 0 ,
                 this.trazos[cual].width );

            image( this.trazos[cual] , x1+x , y1+y+h/2 , w , h );

        }

    }

    // Getter para obtener el valor de la propiedad
    get miPropiedad() {
        return this._miPropiedad;
    }

}