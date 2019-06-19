function InitPainter(div){
  document.getElementsByTagName("Body")[0].style.backgroundImage = "url(background.png)";
  document.getElementsByTagName("Body")[0].style.backgroundSize = "cover";

  
  Init_title();
  Init_bar();
  Initcanvas();

  document.getElementById("mypainter").appendChild(title);
  document.getElementById("mypainter").appendChild(canvas_div);
  document.getElementById("mypainter").appendChild(bar);

  canvas.addEventListener('mousedown',mouseDown);
  canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', mouseMove)});
}

function Init_title(){
  title = document.createElement('p');
  title.innerHTML = "PAINTER";
  title.id = "title";
  title.style.fontFamily ="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";    
  title.style.fontSize = "50px";
  title.style.fontWeight = "bold";
  title.style.margin = " 20px";
}

function Initcanvas(){
  canvas_div = document.createElement("div");
  canvas_div.id = "canvas_div";
  canvas_div.style.cssFloat = "left";
  
  canvas = document.createElement('canvas');
  ctx = canvas.getContext("2d");    
  canvas.width = 950;
  canvas.height = 500;
  canvas.style.border = '20px solid transparent';
  canvas.style.cursor = "url(pencil.png), crosshair";
  canvas.style.borderImage = 'url(woodhroz.jpg) 60 round';
  canvas.style.margin = "20px";
  canvas.style.marginTop = "0px";
  
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  cPush();
  canvas.addEventListener('mouseup', cPush, false);


  canvas_div.appendChild(canvas);

}

function Init_bar(){
  bar = document.createElement("div");
  bar.id = "bar";
  bar.style.cssFloat = "left";

  var br1 = document.createElement("br");
  var br2 = document.createElement("br");
  var br3 = document.createElement("br");
  var br4 = document.createElement("br");
  var br5 = document.createElement("br");
  var br6 = document.createElement("br");
  var br7 = document.createElement("br");
  var br8 = document.createElement("br");
  var br9 = document.createElement("br");

  Init_clearcanvas();
  Init_eraser();
  Init_brusher();
  Init_circler();
  Init_rectangler();
  Init_triangler();
  Init_filler();
  Init_color_range();
  Init_widthvalue();
  Init_preview();
  Init_save();
  Init_undo();
  Init_redo();

  bar.appendChild(clearcanvas);
  bar.appendChild(eraser);
  bar.appendChild(brusher);
  bar.appendChild(br2);
  bar.appendChild(circler);
  bar.appendChild(rectangler);
  bar.appendChild(triangler);
  bar.appendChild(br9);
  bar.appendChild(filler);
  bar.appendChild(undo);
  bar.appendChild(redo);    
  bar.appendChild(br8);
  bar.appendChild(R);
  bar.appendChild(red);
  bar.appendChild(br3);
  bar.appendChild(G);
  bar.appendChild(green);
  bar.appendChild(br4);
  bar.appendChild(B);
  bar.appendChild(blue);
  bar.appendChild(br1);
  bar.appendChild(thickness);
  bar.appendChild(widthvalue);
  bar.appendChild(br6);  
  bar.appendChild(preview);
  bar.appendChild(br5);
  bar.appendChild(save);
  bar.appendChild(br7);

}

function Init_clearcanvas(){
  clearcanvas = document.createElement("button");
  clearcanvas.style.backgroundImage = "url(clear.png)";
  clearcanvas.style.backgroundSize = "cover";
  clearcanvas.style.width = "70px";
  clearcanvas.style.height = "70px";
  clearcanvas.style.borderRadius = "3px";
  clearcanvas.style.margin = "20px"; 
  clearcanvas.style.marginLeft = "60px";
  clearcanvas.style.marginRight = "0px"; 
  clearcanvas.style.marginBottom = "0px"; 
  clearcanvas.addEventListener("click", clear);
}
function clear(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  cPush();
}

function Init_eraser(){
  eraser = document.createElement("button");
  eraser.style.backgroundImage = "url(eraser.png)";
  eraser.style.backgroundSize = "cover";

  eraser.style.width = "70px";
  eraser.style.height = "70px";
  eraser.style.borderRadius = "3px";
  eraser.style.margin = "20px"; 
  eraser.style.marginRight = "0px";
  eraser.style.marginBottom = "0px"; 
  eraser.addEventListener("click",erase);
}

features_style = 0;

function erase(){
  features_style = 1;
  canvas.style.cursor = "url(erase.png), crosshair";

}

function Init_brusher(){
  brusher = document.createElement("button");
  brusher.style.backgroundImage = "url(brush.png)";
  brusher.style.backgroundSize = "cover";
  brusher.style.width = "70px";
  brusher.style.height = "70px";
  brusher.style.borderRadius = "3px";
  brusher.style.margin = "20px"; 
  brusher.style.marginRight = "0px";
  brusher.style.marginBottom = "0px"; 
  brusher.addEventListener("click",brush);
}

function brush(){
  features_style = 0;
  canvas.style.cursor = "url(pencil.png), crosshair";

}

var picture = new Image();

function Init_circler(){
  circler = document.createElement("button");
  circler.style.backgroundImage = "url(circle.png)";
  circler.style.backgroundSize = "cover";
  circler.style.width = "70px";
  circler.style.height = "70px";
  circler.style.borderRadius = "3px";
  circler.style.margin = "20px"; 
  circler.style.marginLeft = "60px";
  circler.style.marginRight = "0px";
  circler.style.marginBottom = "0px";
  circler.addEventListener("click",circle);

}

function circle(){
  features_style = 2;
  canvas.style.cursor = "url(circle_cursor.png), crosshair";
}

function Init_rectangler(){
  rectangler = document.createElement("button");
  rectangler.style.backgroundImage = "url(rectangle.png)";
  rectangler.style.backgroundSize = "cover";
  rectangler.style.width = "70px";
  rectangler.style.height = "70px";
  rectangler.style.borderRadius = "3px";
  rectangler.style.margin = "20px"; 
  rectangler.style.marginRight = "0px";
  rectangler.style.marginBottom = "0px";
  rectangler.addEventListener("click",rectangle);

}

function rectangle(){
  features_style = 3;
  canvas.style.cursor = "url(rectangle_cursor.png), crosshair"; 
}

function Init_triangler(){
  triangler = document.createElement("button");
  triangler.style.backgroundImage = "url(triangle.png)";
  triangler.style.backgroundSize = "cover";
  triangler.style.width = "70px";
  triangler.style.height = "70px";
  triangler.style.borderRadius = "3px";
  triangler.style.margin = "20px"; 
  triangler.style.marginRight = "0px";
  triangler.style.marginBottom = "0px";
  triangler.addEventListener("click",triangle);

}

function triangle(){
  features_style = 4;
  canvas.style.cursor = "url(triangle_cursor.png), crosshair"; 
}

fill_style = 0;

function Init_filler(){
  filler = document.createElement("button");
  filler.style.backgroundImage = "url(fill_1.png)";
  filler.style.backgroundSize = "cover";
  filler.style.width = "70px";
  filler.style.height = "70px";
  filler.style.borderRadius = "3px";
  filler.style.margin = "20px"; 
  filler.style.marginRight = "0px";
  filler.style.marginLeft = "60px";
  filler.addEventListener("click",fill);
}

function fill(){
  if(fill_style == 0) {
    fill_style = 1;
    filler.style.backgroundImage = "url(fill_0.png)";
  }
  else {
    fill_style = 0;
    filler.style.backgroundImage = "url(fill_1.png)";
  }
}

function Init_undo(){
  undo = document.createElement("button");
  undo.style.backgroundImage = "url(undo.png)";
  undo.style.backgroundSize = "cover";
  undo.style.width = "70px";
  undo.style.height = "70px";
  undo.style.borderRadius = "3px";
  undo.style.margin = "20px"; 
  undo.style.marginRight = "0px";
  undo.addEventListener("click",cUndo);
}

function Init_redo(){
  redo = document.createElement("button");
  redo.style.backgroundImage = "url(redo.png)";
  redo.style.backgroundSize = "cover";
  redo.style.width = "70px";
  redo.style.height = "70px";
  redo.style.borderRadius = "3px";
  redo.style.margin = "20px"; 
  redo.style.marginRight = "0px";
  redo.addEventListener("click",cRedo);
}

function Init_color_range(){
  R = document.createElement("img");
  R.style.backgroundColor = "Red";
  R.width = 30;
  R.height = 30;
  R.style.marginLeft = "70px";

  red = document.createElement("INPUT");
  red.setAttribute("type", "range");
  red.style.margin = "5px"; 
  red.style.width = "190px";
  red.style.height = "30px";
  red.min = 0;
  red.max = 255;
  red.value = 0;

  G = document.createElement("img");
  G.style.backgroundColor = "green";
  G.width = 30;
  G.height = 40;
  G.style.marginLeft = "70px";

  green = document.createElement("INPUT");
  green.setAttribute("type", "range");
  green.style.margin = "5px"; 
  green.style.width = "190px";
  green.style.height = "30px";
  green.min = 0;
  green.max = 255;
  green.value = 0;

  B = document.createElement("img");
  B.style.backgroundColor = "blue";
  B.width = 30;
  B.height = 30;
  B.style.marginLeft = "70px";
  
  blue = document.createElement("INPUT");
  blue.setAttribute("type", "range");
  blue.style.margin = "5px"; 
  blue.style.width = "190px";
  blue.style.height = "30px";
  blue.min = 0;
  blue.max = 255;
  blue.value = 0;
}

function Init_widthvalue(){
  thickness = document.createElement("img");
  thickness.src= "thickness.png";
  thickness.width = 30;
  thickness.height = 30;
  thickness.style.marginLeft = "70px";
  
  widthvalue = document.createElement("INPUT");
  widthvalue.setAttribute("type", "range");
  widthvalue.style.margin = "5px"; 
  widthvalue.style.width = "190px";
  widthvalue.style.height = "30px";

  widthvalue.min = 3;
  widthvalue.max = 30;
  widthvalue.value = 3;
}

function Init_preview(){
  preview = document.createElement("canvas");
  preview_ctx = preview.getContext("2d");
  preview.height = 70;
  preview.width = 70;
  preview_ctx.moveTo(0,0);
  preview_ctx.lineTo(70,70);
  preview.style.backgroundColor = "rgb(255,255,255)";
  preview.style.margin = "10px";
  preview.style.marginLeft = "150px";
   

  showing_preview();
  document.getElementById("mypainter").addEventListener('mousedown', showing_preview);

  document.getElementById("mypainter").addEventListener('mousemove', showing_preview);

  document.getElementById("mypainter").addEventListener('mouseup', showing_preview);
}

function showing_preview(){
  preview_ctx.strokeStyle = "rgb("+red.value+","+green.value+","+blue.value+")";
  preview_ctx.lineWidth = widthvalue.value;
  preview_ctx.clearRect(0, 0, 70, 70);
  preview_ctx.stroke();
}

function Init_save(){
  save = document.createElement("a");
  save.id = "save";
  save.href = "";
  save.style.marginLeft = "55px";

  save.download = "Untitled.png";
  save.addEventListener("click",save_png);
  save.innerHTML = "Save Canvas";
  save.style.fontSize = "50px";
  save.style.fontFamily ="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"; 
}

function save_png(){
  save.href = canvas.toDataURL();
}

x = 0;
y = 0;

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
    if(features_style == 0 || features_style == 1){
      x = evt.clientX - rect.left-20;
      y = evt.clientY - rect.top-20;
    }
    else if(features_style == 2){
      x = evt.clientX - rect.left+5;
      y = evt.clientY - rect.top+5;
    }
    else if(features_style == 3){
      x = evt.clientX - rect.left+5;
      y = evt.clientY - rect.top+5;
    }   
    else if(features_style == 4){
      x = evt.clientX - rect.left-20;
      y = evt.clientY - rect.top-20;
    }    
  return {
    x,
    y
  };   
};

function mouseDown(evt){
  mouse_pos_mouseDown = getMousePos(canvas,evt);
  showingcanvas();
  picture.src = canvas.toDataURL();
  ctx.beginPath();
  ctx.moveTo(mouse_pos_mouseDown.x, mouse_pos_mouseDown.y);
  canvas.addEventListener('mousemove', mouseMove);
}

function mouseMove(evt) {
  var mousePos = getMousePos(canvas, evt);

  if(features_style == 0 || features_style == 1){
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  }
  else if(features_style == 2) {
    ctx.beginPath();
    ctx.drawImage(picture, 0, 0);
    ctx.arc(mouse_pos_mouseDown.x, mouse_pos_mouseDown.y, Math.abs((mousePos.x-mouse_pos_mouseDown.x)), 0, 2 * Math.PI);
    ctx.closePath();
    if(fill_style == 0)ctx.stroke();
    else ctx.fill();
  }    
  else if(features_style == 3){
    ctx.beginPath();
    ctx.drawImage(picture, 0, 0);
    ctx.rect(mouse_pos_mouseDown.x, mouse_pos_mouseDown.y, mousePos.x-mouse_pos_mouseDown.x, mousePos.y-mouse_pos_mouseDown.y)
    ctx.closePath();
    if(fill_style == 0)ctx.stroke();
    else ctx.fill();
  }
  else if(features_style == 4){
    ctx.beginPath();
    ctx.drawImage(picture, 0, 0);
    ctx.moveTo(mouse_pos_mouseDown.x, mouse_pos_mouseDown.y);
    ctx.lineTo(mousePos.x, mousePos.y); // draw straight down by 200px (200 + 200)
    ctx.lineTo(2*mouse_pos_mouseDown.x-mousePos.x, mousePos.y); // draw up toward left (100 less than 300, so left)
    ctx.closePath();
    if(fill_style == 0)ctx.stroke();
    else ctx.fill();
  }

}




function showingcanvas(){
  if(features_style == 1) {
    ctx.strokeStyle = "rgb(255, 255, 255)" ;
  }
  else{
    ctx.strokeStyle = "rgb("+red.value+","+green.value+","+blue.value+")";
    ctx.fillStyle = "rgb("+red.value+","+green.value+","+blue.value+")";
  }
  ctx.lineWidth = widthvalue.value;  

}

cPushArray = new Array();
cStep = -1;

function cPush() {
  cStep++;
  if (cStep < cPushArray.length) { cPushArray.length = cStep; }
  cPushArray.push(canvas.toDataURL());
}             

function cUndo() {
  if (cStep > 0) {
      cStep--;
      var canvasPic = new Image();
      canvasPic.src = cPushArray[cStep];
      canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
  }
}      

function cRedo() {
  if (cStep < cPushArray.length-1) {
      cStep++;
      var canvasPic = new Image();
      canvasPic.src = cPushArray[cStep];
      canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
  }
}        
        
// var link1 = document.createElement('link');
// link1.id = 'link1';
// link1.rel = 'stylesheet';
// link1.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css';
// document.head.appendChild(link1);

// var script1 = document.createElement('script');
// script1.id = 'script1';
// script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
// document.head.appendChild(script1);

// var script2 = document.createElement('script');
// script2.id = 'script2';
// script2.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js';
// document.head.appendChild(script2);
