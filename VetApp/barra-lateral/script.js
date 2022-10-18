const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const mainframe = document.querySelector('.mainframe');

menuToggle.onclick = () => {
  navigation.classList.toggle('open');
  mainframe.classList.toggle('open');
}

function cerrarNav() {
  navigation.classList.remove('open');
  mainframe.classList.remove('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.onclick = () => {
    listItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  }
}) 
