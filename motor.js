//w es largo
//h es ancho

class sprite{
	constructor(x,y,dir,w,h){
		this.im=im;
		im=new Image();
		this.x=x;
		this.y=y;
		this.dir=im.src;
	}
	draw(){
		ctx.drawImage(this.im,this.x,this.y);
		//ctx.drawImage(this.im,this.x,this.y,this.w,this.h);
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