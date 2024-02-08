// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function popUpClose(){
    document.getElementsByClassName("modal-content")[0].style.display = "none";
}

function popUpModal() {
    item = document.getElementById('test')
    item.style.display = 'block'
    item.style.animation = 'myAnim 2s ease 0s 1 normal forwards'
    
}

function moveButton(x) {
    marginX = Math.floor(Math.random()*800)
    marginY = Math.floor(Math.random()*800)

    x.style.top = marginX.toString() + 'px'
    x.style.left = marginY.toString() + 'px'
}
