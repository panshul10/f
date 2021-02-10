canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d"); 
ctx.beginPath(); 
ctx.strokeStyle = "blue"; 
ctx.lineWidth = 5; 
ctx.arc(200, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke(); 


ctx.beginPath(); 
ctx.strokeStyle = "black"; 
ctx.lineWidth = 5; 
ctx.arc(250, 200, 40 ,0 , 2*Math.PI);  
ctx.stroke(); 


ctx.beginPath(); 
ctx.strokeStyle = "red"; 
ctx.lineWidth = 5; 
ctx.arc(300, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke();


ctx.beginPath(); 
ctx.strokeStyle = "yellow"; 
ctx.lineWidth = 5; 
ctx.arc(225, 250, 40 ,0 , 2*Math.PI); 
ctx.stroke();


ctx.beginPath(); 
ctx.strokeStyle = "green"; 
ctx.lineWidth = 5; 
ctx.arc(300, 250, 40 ,0 , 2*Math.PI);  
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e)
{ mouse_x = e.clientX - canvas.offsetLeft; mouse_y = e.clientY - canvas.offsetTop; 
    console.log("X = " + mouse_x + " ,Y = " + mouse_y); 
    circle(mouse_x , mouse_y); } 
    function circle(mouse_x , mouse_y) 
    { ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2; 
        ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); 
        ctx.stroke(); }
