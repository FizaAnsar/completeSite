function toggleClass()
{
    const navLists = document.querySelectorAll('.navLists')
    const rightNav = document.querySelectorAll('.rightNav')
    navLists.forEach(nav => nav.classList.toggle('toggleShow'))
    rightNav.forEach(nav => nav.classList.toggle('toggleShow'))
    
}
document.querySelector('.navbarToggle')
.addEventListener('click', toggleClass);



