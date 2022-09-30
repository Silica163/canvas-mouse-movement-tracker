const canvas = document.getElementById("main");
const mCtx = canvas.getContext("2d");
const mxCtx = document.getElementById("mxgraph").getContext("2d");
const myCtx = document.getElementById("mygraph").getContext("2d");
const mxyCtx = document.getElementById("mxy").getContext("2d");
var pos = 0;
var lastpos = {x:0,y:0}
function drawT(x,y){
	mCtx.strokeStyle = "#fff";
	mCtx.beginPath();
	mCtx.moveTo(lastpos.x,lastpos.y);
	mCtx.lineTo(mCtx.canvas.width/2+x,mCtx.canvas.height/2+y);
	lastpos.x = mCtx.canvas.width/2+x;
	lastpos.y = mCtx.canvas.height/2+y;
	mCtx.stroke();
	pos++;
	mCtx.clearRect(pos,0,1,500);
	if(pos == 500){
		pos=0;
	}
}
const posData = {
	mxe : document.getElementById("mx"),
	mye : document.getElementById("my"),
	xe : document.getElementById("x"),
	ye : document.getElementById("y"),
	x : 0,
	y : 0,
	mx : 0,
	my : 0,
	ids : {},
	update(e){
		posData.x = e.offsetX,
		posData.y = e.offsetY,
		posData.mx = e.movementX,
		posData.my = e.movementY;
		posData.mxe.innerHTML = posData.mx;
		posData.mye.innerHTML = posData.my;
		posData.xe.innerHTML = posData.x;
		posData.ye.innerHTML = posData.y;
//		drawT(posData.mx,posData.my);
		window.requestAnimationFrame(xyGraph.bind(this,posData.mx,posData.my));
		window.requestAnimationFrame(wavForm.bind(this,mxCtx,posData.mx));
		window.requestAnimationFrame(wavForm.bind(this,myCtx,posData.my));
	}
}
console.log(posData);
canvas.addEventListener("mousemove",posData.update);
canvas.addEventListener("mousedown",canvas.requestPointerLock);
