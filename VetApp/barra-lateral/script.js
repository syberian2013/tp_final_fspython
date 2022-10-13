const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const navbar = document.querySelector('.navbar');

menuToggle.onclick = () => {
  navigation.classList.toggle('open');
  navbar.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.onclick = () => {
    listItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  }
}) 
