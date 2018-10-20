//w es largo
//h es ancho

class sprite{
	constructor(x,y,dir){
		this.dir=dir;
		this.x=x;
		this.y=y;
		this.img=new Image();
		this.img.src=this.dir;
	}
	draw(){
		ctx.clearRect(0,0,500,600);
		ctx.drawImage(this.img,this.x,this.y);
	}
}

class game{
	constructor(){

	}
	main(){
		const canvas=document.getElementById("canvas");
		var ctx=canvas.getContext("2d");
		var d=new sprite()
	}
}

var c=new game();
window.addEventListener("load",c.main,false);