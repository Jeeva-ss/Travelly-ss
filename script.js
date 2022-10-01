const heading = document.querySelector("h1");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

heading.addEventListener("click", topFunction);
