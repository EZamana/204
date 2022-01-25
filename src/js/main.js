document.querySelector('.header-hamburger-img').addEventListener('click', () => {
    document.querySelector('.header-sidenav').classList.toggle("header-sidenav-open")
    document.body.classList.toggle('lockScroll')
})

document.querySelectorAll('.sublist-btn').forEach(btn => {
    btn.addEventListener('click', function()  {
        this.classList.toggle('active')
        let sublist = this.nextElementSibling
        sublist.classList.toggle('header-sidenav-sublist-active')
        /*if (sublist.classList.contains()) {
            sublist.style.display = "none"
        } else {
            sublist.style.display = 'block'
        }*/
    })
})