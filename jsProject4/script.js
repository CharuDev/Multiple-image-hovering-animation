var elem1=document.querySelectorAll(".elem")
// var elem1img = document.querySelector("#elem1 img")
// elem1.addEventListener("mousemove",function(dests){
//     elem1img.style.left=dests.x+"px";
//     elem1img.style.top=dests.y+"px"
// })
// elem1.addEventListener("mouseenter",function(){
//     elem1img.style.opacity=1
// })
// elem1.addEventListener("mouseleave",function(){
//     elem1img.style.opacity=0
// })
 elem1.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px";
        val.childNodes[3].style.top=dets.y+"px";
    });
 });