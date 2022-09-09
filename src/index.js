const canvas = document.getElementById("main");
canvas.width = 500;
canvas.height = 500;
const mCtx = canvas.getContext("2d");
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
	}
}
console.log(posData);
canvas.addEventListener("mousemove",posData.update)
