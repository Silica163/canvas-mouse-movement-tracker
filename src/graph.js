function xyGraph(ctx,x,y,paramId){
	var center = {x:ctx.canvas.width/2,y:ctx.canvas.height/2};
	var id = (paramId ?? ctx.canvas.id) ?? xyGraph.pos.length;
	var pos = xyGraph.pos[id]??0;
	var lastpos = xyGraph.lastPos[id] ?? {x:0,y:0};
	ctx.strokeStyle = "#fff";
	ctx.beginPath();
	ctx.moveTo(center.x+lastpos.x,center.y+lastpos.y);
	ctx.lineTo(center.x+x,center.y+y);
	lastpos.x = x;
	lastpos.y = y;
	ctx.stroke();
	pos++;
	ctx.fillStyle = "#0008"
	ctx.fillRect(pos,0,1,ctx.canvas.height);
	if(pos >= ctx.canvas.height){
		pos=0;
	}
	xyGraph.pos[id] = pos;
	xyGraph.lastPos[id] = lastpos;
}
xyGraph.pos = {};
xyGraph.lastPos = {};

function wavForm(ctx,value,id){
	var id = id ?? ctx.canvas.id ?? wavForm.pos.length;
	var pos = wavForm.pos[id]??0;
	ctx.clearRect(pos,0,1,ctx.canvas.height);
	ctx.strokeStyle = "#fff";
	ctx.beginPath();
	ctx.moveTo(pos,ctx.canvas.height/2);
	ctx.lineTo(pos,ctx.canvas.height/2+value);
	ctx.stroke();
	pos++;
	ctx.fillStyle = "#0af";
	ctx.fillRect(pos,0,1,ctx.canvas.height);
	if(pos == ctx.canvas.width){
		pos=0;
	}
	wavForm.pos[ctx.canvas.id] = pos
}
wavForm.pos = {};

