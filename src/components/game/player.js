class Player {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = image;
    }
    Update() {
        this.x += speed;
    }
    
}