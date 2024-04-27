let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("all").style.top = "0";
       
    } else {
        document.getElementById("all").style.top = "-50px"; // Adjust this value based on the desired shrink effect
        document.getElementById("all").style.transition = "all 0.2s ease";
    }
    
    prevScrollPos = currentScrollPos;
}

// You can use JavaScript to dynamically change the content of the scrolling text.
document.querySelector('.insurance-div').innerText = "";
