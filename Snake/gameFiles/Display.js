class Display {
    constructor(width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.height = height;
        this.canvas.width = width;
        document.body.appendChild(this.canvas);

    }

    displayRect(x, y, width, height, color){
        this.canvas.fillStyle = color;
        this.canvas.fillRect(x, y, width, height);
    }
}
