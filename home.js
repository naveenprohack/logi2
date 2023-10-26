var myslide = document.querySelectorAll(".myslide");
slide();
setTimeout(slide,2000)
function slide(){
for(let i = 0;i<myslide.length;i++){
myslide = myslide[i];
}
}