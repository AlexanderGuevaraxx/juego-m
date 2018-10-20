//w es largo
//h es ancho

class sprite{
	constructor(x,y,dir,w,h){
		var im=new Image();
		this.x=x;
		this.y=y;
		this.dir=im.src
	}
	draw(){

	}
}

class game{
	constructor(){

	}
	main(){
		const canvas=document.getElementById("canvas");
		var ctx=canvas.getContext("2d");
		ctx.fillRect(10,20,100,200);
	}
}

window.addEventListener("load",game.main,false);