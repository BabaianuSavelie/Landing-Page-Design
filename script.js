const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const icon = document.querySelector('#icon');

closeBtn.onclick = () => {
    sidebar.classList.remove('sidebar-active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars-sort');
    icon.style.color = 'black';
}