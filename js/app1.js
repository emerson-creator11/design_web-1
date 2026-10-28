const topo = document.getElementById("topo");
const enfase = document.getElementById("enfase");
window.addEventListener('scroll', function(e) {
    if (window.scrollY > 0){
        topo.classList.add("solid");
    }else{
        topo.classList.remove("solid")
    }
})

function destaque(){
    enfase.classList.add("destaque");
}