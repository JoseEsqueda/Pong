//const balls = [];
let game = new Game();
let men = new menu();

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background ("#A4A5A5");
    //circle(50,50,30);
    //ellipseMode(RADIUS);
    //ellipse(200,200,30,130);
    //triangle(10,10,70,80,200,150);
    /*for(let b of balls) {
        b.display();
        b.y++;
        b.x++;
    }*/
    game.display();
}

/*function mouseMoved(){
    console.log("Mouse Moved");
}

function mousePressed(){
    console.log("Mouse Pressed");
}

function mouseReleased(){
    console.log("Mouse released");
}

function mouseDragged(){
    console.log("Mouse dragged");
}*/

/*function mouseClicked(){
    let b = new Ball(mouseX, mouseY, 30);
    balls.push(b);
}*/