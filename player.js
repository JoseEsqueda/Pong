class player{
    constructor(player,yFirst,x1,x2,limitUp,limitDown){
        
        this.player=player;
        this.mov=5;
        this.heigth=100;
        this.width=10;
        this.yFirst=yFirst;
        this.x1=x1;
        this.x2=x2;
        this.posicion();
        this.score=0;
        this.limitUp=limitUp;
        this.limitDown=limitDown;
    }
    
    display(){
        fill('white');
		rect(this.x, this.y, 10,100);
		this.moveY();
		this.collision();
        
	}

    posicion(){
        if(this.player==1){
            this.x=this.x1;
            this.y=this.yFirst;
            
        }else{
            if(this.player==2){
                this.x=this.x2;
                this.y=this.yFirst;

            }
        }
    }

    moveY(){
        if(this.player==1){
            if (keyIsDown(87)) {
                this.y+=-this.mov;
            } 
            if (keyIsDown(83)) {
                this.y+=this.mov;
            }
	    }else{
            if(this.player==2){
                if (keyIsDown(UP_ARROW)) {
                    this.y+=-5;
                } 
                if (keyIsDown(DOWN_ARROW)) {
                    this.y+=5;
                }
                
            } 
        }
    }

    collision(){
        if(this.y>=this.limitDown-this.heigth){
			this.y=this.limitUp-this.heigth;
		}
        if(this.y<=this.limitUp){
            this.y=this.limitUp;
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

    getHeight(){
        return this.heigth;
    }
    getWidth(){
        return this.width;
    }

    getScore(){
        return this.score;
    }

    setScore(point){
        this.score+=point;
    }
    getPlayer(){
        return this.player;
    }
}