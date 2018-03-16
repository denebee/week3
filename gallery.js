var images = new Array('kim1.jpg','kim2.jpg','kim3.jpg',)
var start=0;

document.getElementById("left").onclick=function(){
    //alert("left");

    start--;
    if(start<0)
        start=images.length-1;
        document.getElementById("myImage").src=images[start];
}

document.getElementById("right").onclick=function(){
    //alert("right");
    start++;
    if(start>images.length-1)
        start=0;
    document.getElementById("myImage").src=images[start];
}