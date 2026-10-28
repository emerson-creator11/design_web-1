const topo = document.getElementById("topo");

window.addEventListener('scroll', function(e) {
    if (window.scrollY > 0){
        topo.classList.add("solid");
    }else{
        topo.classList.remove("solid")
    }
})