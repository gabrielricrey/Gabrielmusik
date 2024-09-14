const menuButton = document.querySelector('.menubtn');
const closeMenuButton = document.querySelector('.closebtn');

menuButton.addEventListener('click', () =>{
    closeMenuButton.style.display = 'block';
    menuButton.style.display = 'none';
})

closeMenuButton.addEventListener('click', () =>{
    closeMenuButton.style.display = 'none';
    menuButton.style.display = 'block';
})