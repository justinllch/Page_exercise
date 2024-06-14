var profile = document.querySelectorAll(".profile");
var divshow = document.querySelectorAll(".divshow");
for (var i = 0; i < profile.length; i++) {
    profile[i].addEventListener('click', function () {
        for (var j = 0; j < profile.length; j++) {
            profile[j].classList.remove("picked");
        }
        this.classList.toggle("picked");
    });
}
for(var z=0;z<profile.length;z++){
    profile[z].addEventListener('click', function(){
    for (var x = 0; x < divshow.length; x++) {
        divshow[x].style.display = 'none';
        if (profile[x].classList.contains('picked') === true) {
            divshow[x].style.display = 'flex'
        }
    }
});
}


