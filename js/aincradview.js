var small = document.querySelectorAll(".small");
var big = document.querySelector("#big");
for(var i=0;i<small.length;i++){
    small[i].addEventListener('click',function(){
        for(var j=0;j<small.length;j++){
            small[j].classList.remove("selected");
        }
        this.classList.toggle("selected");
        big.setAttribute("src", this.getAttribute("src"));
    });
}