class Sign{
    constructor(displayId){
        this.displayId = document.getElementById(displayId);
        this.context = this.displayId.getContext('2d');
    }

    drawForm(){
        this.context.beginPath();
        this.context.moveTo(10, 10);
        this.context.lineTo(15, 10);
        this.context.lineTo(35, 10);
        this.context.lineTo(40, 10);
        this.context.lineTo(40, 40);
        this.context.closePath()
        this.context.lineWidth = "4";
        this.context.strokeStyle = '#DC3545';
        this.context.stroke();
    }

    drawRect(){
        this.context.strokeStyle = '#0D6EFD';
        this.context.strokeRect( 50, 10, 100, 40);
        this.context.lineWidth = "2";
    }
}
 

let firstDraw = new Sign ('canvasDisplay');
firstDraw.drawForm();
firstDraw.drawRect()