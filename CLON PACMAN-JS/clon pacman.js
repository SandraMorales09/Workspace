class Pacman {
    constructor(x, y, width, height, speed) {
        this. x = x;
        this. y = y;
        this. width = width;
        this. height = height;
        this. speed = speed;
        this. direction =DIRECTION_RIGHT
    }

    movedProcess() {
        this.changeDirectionIPossible();
        this.movedForwards();
        if (this.checkCollision()) {
            this.movedBackwards();
        }
}

eat() {}

movedBackwards() {
    switch(this.direction) {
        case DIRECTION_RIGHT:
            this.x -= this.speed
            break;
        case DIRECTION_UP:
            this.y += this.speed
            break;
        case DIRECTION_LEFT:
            this.x += this.speed 
            break;   
        case DIRECTION_BOTTOM:
            this.y -= this.speed
            break;    
                    
     }

}

movedForwards() {
    switch(this.direction) {
        case DIRECTION_RIGHT:
            this.x += this.speed
            break;
        case DIRECTION_UP:
            this.y -= this.speed
            break;
        case DIRECTION_LEFT:
            this.x -= this.speed 
            break;   
        case DIRECTION_BOTTOM:
            this.y += this.speed
            break;    
                    
     }
}

        checkCollision() {
            let isCollided = false
            if (
                map[this.getMapY()][this.getMapx()] == 1 ||          
                map[this.getMapXRightSide()][this.getMapX()] == 1||       
                map[this.getMapY()][this.getMapXRightSide()] == 1
            ) {

            }
    }

    checkedGhostCollision() {}
 
    checkedDirectionIfPosition() {}

    changeAnimation() {}

    draw() {}

    getMapX() {
        return parSeInt(this.x / oneBlockSize)
    }

    getMapY() {
        return parSeInt(this.x / oneBlockSize)
    }

    getMapXRightSide() {
        return parSeInt((this.x + 0.9999 * oneBlokSize  ) / oneBlockSize)
    }

    getMapXRightSide() {
        return parSeInt((this.y + 0.9999 * oneBlokSize  ) / oneBlockSize)
    }
}