    limitUp=innerHeight/5;
    limitDown=innerHeight-100;  
    let b = new Ball(innerWidth/2, innerHeight/2,30,4,limitUp,limitDown);
    let player1 = new player(1,limitDown/2,300,1000,limitUp,limitDown);
    let player2 = new player(2,limitDown/2,300,1000,limitUp,limitDown);
class Game{
    constructor(){
       
    }

    display(){
        fill('#000');
        rect(300,limitUp,710,limitDown-125);
        fill('black');

        this.mostrarPuntaje();
        this.mostrarIntrucciones();
        this.titulo();
        b.display();
		player1.display();
		player2.display();
        this.puntuacion();
    }

    titulo(){
        textSize(50);
        text('Pong',580,80);
    }
    mostrarPuntaje(){
        textSize(30);
        text(player1.getScore(), 170, 250);
        text(player2.getScore(), 1130, 250);
    }

    mostrarIntrucciones(){
        
        textSize(20);
        text('W y S',150,320);

        textSize(20);
        text('Flechas',1100,320);

    }

    puntuacion(){
            if(b.getX()<player1.getX()){
                player2.setScore(1);
                this.reiniciar();
            }
           if(b.getX()>player2.getX()){
                player1.setScore(1);
                this.reiniciar();
            }    
    }
    reiniciar(){
    b.setX(innerWidth/2);
    b.setY(innerHeight/2);
    player1.posicion();
    player2.posicion();
    }   
}