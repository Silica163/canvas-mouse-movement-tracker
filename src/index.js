const canvas = document.getElementById("main");
const mCtx = canvas.getContext("2d");
const mxCtx = document.getElementById("mxgraph").getContext("2d");
const myCtx = document.getElementById("mygraph").getContext("2d");
var pos = 0
function drawT(x,y){
	mCtx.strokeStyle = "#fff";
	mCtx.beginPath();
	mCtx.moveTo(pos,mCtx.canvas.height/2);
	mCtx.lineTo(pos,mCtx.canvas.height/2+y);
	mCtx.stroke();pos++;
	mCtx.clearRect(pos,0,1,500);
	if(pos == 500){
		pos=0;
	}
}

function wavForm(ctx,x,y,id){
	var pos = wavForm.pos[id ?? ctx.canvas.id]??0;
	ctx.strokeStyle = "#fff";
	ctx.beginPath();
	ctx.moveTo(pos,ctx.canvas.height/2);
	ctx.lineTo(pos,ctx.canvas.height/2+y);
	ctx.stroke();
	pos++;
	ctx.fillStyle = "#0af";
	ctx.fillRect(pos+1,0,1,ctx.canvas.height);
	ctx.clearRect(pos,0,1,ctx.canvas.height);
	if(pos == ctx.canvas.width){
		pos=0;
	}
	wavForm.pos[ctx.canvas.id] = pos
}
wavForm.pos = {}

const posData = {
	mxe : document.getElementById("mx"),
	mye : document.getElementById("my"),
	xe : document.getElementById("x"),
	ye : document.getElementById("y"),
	x : 0,
	y : 0,
	mx : 0,
	my : 0,
	update(e){
		console.log(e);
		posData.x = e.offsetX,
		posData.y = e.offsetY,
		posData.mx = e.movementX,
		posData.my = e.movementY;
		posData.mxe.innerHTML = posData.mx;
		posData.mye.innerHTML = posData.my;
		posData.xe.innerHTML = posData.x;
		posData.ye.innerHTML = posData.y;
//		drawT(posData.x,posData.mx);
		wavForm(mxCtx,0,posData.mx);
		wavForm(myCtx,0,posData.my);
	}
}
console.log(posData);
canvas.addEventListener("mousemove",posData.update);
canvas.addEventListener("mousedown",canvas.requestPointerLock);
