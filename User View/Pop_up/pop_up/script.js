
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup_outer").style.display="block";
        },2000
       
    )
})

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup_outer").style.display="none";
})