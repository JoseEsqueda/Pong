class Ball{
    constructor(x,y,d,v,limitUp,limitDown){
        this.x = x;
        this.y = y;
        this.d = d;
        this.speedY=v;
		this.speedX=v;
        this.limitUp=limitUp;
        this.limitDown= limitDown;
        //this.c = this.randomColor();
    }

    display(){
		fill('white');
		circle(this.x, this.y, this.d);
		this.moveY();
		this.moveX();
		this.hasCollision();
	}
    
	moveY(){
		this.y+=this.speedY;
	}
	
	moveX(){
		this.x+=this.speedX;
	}

    hasCollision(){
		this.collisionX();
		if(this.y>=this.limitDown-(this.d/2) || this.y<=this.limitUp+(this.d/2)){
			this.speedY*=-1;
		}	
	}

    collisionX(){
		//rebote jugador 2
		if(this.x>=player2.getX()-(this.d/2)&&this.y>=player2.getY() && this.y<=(player2.getY()+player2.getHeight())){
			this.rebotePlayer(player2.getPlayer(),player2.getY(),player2.getHeight());
			
		
		}
		//rebote jugador 1
		if(this.x<=(player1.getX()+player1.getWidth())+(this.d/2)&&this.y>=player1.getY() && this.y<=(player1.getY()+player1.getHeight())){
			this.rebotePlayer(player2.getPlayer(),player1.getY(),player1.getHeight());

		}
	}

    rebotePlayer(jugador,playerY,playerHeigth){
		if(this.y>=playerY&&this.y<=playerY+(playerHeigth/3)){
			this.speedY*=-1;
			this.speedX*=-1;
		}else if(this.y>=playerY+(playerHeigth/3)&&this.y<=playerY+((playerHeigth/3)*2)){
			this.speedX*=-1;
		}else if(this.y>=playerY+((playerHeigth/3)*2)&&this.y<=playerY+playerHeigth){
			this.speedY*=-1;
			this.speedX*=-1;
		}
	}

    getX(){
		return this.x;
	}

	setX(x){
		this.x=x;
	}

	getY(){
		return this.y;
	}

	setY(y){
		this.y=y;
	}


   /* randomColor(){
        const color = [];
        for (let i = 0; i<3; i++){
            color.push[Math.floor(Math.random()*256)];
        }
        return color;
        return Array.from(Array(3),() => Math.floor(Math.random()*256));
    }*/
}