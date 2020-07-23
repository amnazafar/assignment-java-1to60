

                                                //Assignment no:53 to 58


//question no:1
function showimage(e){
    console.log(e.src)
    var modalImage=document.getElementById("modalImage")
    modalImage.src=e.src

}


//question no:2
function zoomin(){
    var p=document.getElementById("zoomin")
    p.style.fontSize="40px"
}

function zoomout(){
    var p=document.getElementById("zoomin")
    p.style.fontSize="12px"
}