var smallbuy = document.querySelectorAll(".smallbuy");
var bigbuy = document.querySelector("#bigbuy");
for(var i=0;i<smallbuy.length;i++){
    smallbuy[i].addEventListener('click',function(){
        for(var j=0;j<smallbuy.length;j++){
            smallbuy[j].classList.remove("buyselected");
        }
        this.classList.toggle("buyselected");
        bigbuy.setAttribute("src", this.getAttribute("src"));
    });
}