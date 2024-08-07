
document.getElementById("hm").onclick = function(){
    window.location.href = "#home"
}
document.getElementById("abt").onclick = function(){
    window.location.href = "#about"
}
document.getElementById("fit").onclick = function(){
    window.location.href = "#fitness"
}
document.getElementById("amen").onclick = function(){
    window.location.href = "#amenities"
}
document.getElementById("revi").onclick = function(){
    window.location.href = "#review"
}
document.getElementById("register").onclick = function(){
    window.location.href = "#plans"
}
document.querySelectorAll(".btn").forEach(function(b){
    b.onclick = function(){
        alert("If you want to join us, you have to contact us !");
        window.location.href="#contact";
    }
});
 