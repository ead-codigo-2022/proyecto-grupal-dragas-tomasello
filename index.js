const menu_toggle = document.querySelector('.burguer')
const navigation = document.querySelector('.navbar')
menu_toggle.onclick = function(){
    navigation.classList.toggle('active')
}