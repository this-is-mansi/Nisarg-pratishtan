
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            // document.querySelector(".popup_outer").style.display="block";
        },4
       
    )
})

const events =document.getElementById("events");
console.log(events);
events.addEventListener("click", function(){
     document.querySelector(".popup_outer").style.display="block";
})

document.querySelector(".popup_outer").addEventListener("click",function(){
    document.querySelector(".popup_outer").style.display="none";
})

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup_outer").style.display="none";
})