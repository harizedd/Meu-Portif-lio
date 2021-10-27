document.querySelector(".menuTop").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
)

document.addEventListener("scroll", () => {
    let scrollMenu = document.querySelector('#fake_header')
    
    if (window.scrollY >= 50 ) {
        scrollMenu.classList.add('show')
    } else {
        scrollMenu.classList.remove('show')
    }
}

)
