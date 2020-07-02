class Sign{
    constructor(displayId){
        this.displayId = document.getElementById(displayId);
        this.context = this.displayId.getContext('2d');
    }
}