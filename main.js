
var canvas=new fabric.Canvas("mycanvas");
var block_image_width=30;
var block_image_height=30;
playerx=10;
playery=10;
var player_object="";
function playerupload(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
left:playerx
        });
        canvas.add(player_object);
    });
};
function objectupload(block_image){
    fabric.Image.fromURL(block_image,function(img){
        block_object=img;
        block_object.scaleToWidth(block_image_width);
block_object.scaleToHeight(block_image_height);
block_object.set({
    top:playery,
    left:playerx
})
canvas.add(block_object);
    })
}
window.addEventListener('keydown',mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(e.shiftKey==true && keypressed=='80'){
    block_image_height+=10;
block_image_width+=10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keypressed=='77'){
    block_image_height-=10;
    block_image_width-=10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(keypressed=='67'){
    objectupload("cloud.jpg");
    console.log("c");
}
if(keypressed=='68'){
    objectupload("dark_green.png");
    console.log("d");
}
if(keypressed=='71'){
    objectupload("ground.png");
    console.log("g");
}
if(keypressed=='76'){
    objectupload("light_green.png");
    console.log("l");
}
if(keypressed=='82'){
    objectupload("roof.jpg");
    console.log("r");
}
if(keypressed=='84'){
    objectupload("trunk.jpg");
    console.log("t");
}
if(keypressed=='85'){
    objectupload("unique.png");
    console.log("u");
}
if(keypressed=='87'){
    objectupload("wall.jpg");
    console.log("w");
}
if(keypressed=='89'){
    objectupload("yellow_wall.png");
    console.log("y");
}
}
function right(){
    if(playerx<=650){
    playerx+=block_image_width;
    console.log("x="+playerx+"y="+playery);
    canvas.remove(player_object);
    playerupload();
    }
}
function left(){
    if(playerx>=0){
    playerx-=block_image_width;
    console.log("x="+playerx+"y="+playery);
    canvas.remove(player_object);
    playerupload();
    }
}
function up(){
    if(playery>=0){
    playery-=block_image_height;
    console.log("x="+playerx+"y="+playery);
    canvas.remove(player_object);
    playerupload();
    }
}
function down(){
    if(playery<=550){
    playery+=block_image_height;
    console.log("x="+playerx+"y="+playery);
    canvas.remove(player_object);
    playerupload();
    }
}