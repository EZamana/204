let subListBtnArr = document.querySelectorAll('.sublist-btn')
let sideNav = document.querySelector('.header-sidenav')

document.querySelector('.header-hamburger-img').addEventListener('click', () => {
    sideNav.classList.toggle("header-sidenav-open")
    document.body.classList.toggle('lockScroll')
})

subListBtnArr.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let sublist = this.nextElementSibling
        if (this.classList.contains('active')) {
            this.classList.toggle('active')
        } else {
            e.preventDefault()
            this.classList.toggle('active')
            this.childNodes[1].classList.toggle('active-arrow')
            sublist.classList.toggle('header-sidenav-sublist-active')
        }
    })
})