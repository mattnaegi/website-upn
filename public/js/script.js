// console.log('script loaded');

let data;
let solar_stats = [];
let battery_stats = [];
let general_stats = [];


//mobile menu toggle
const mobilemenu = document.getElementById('m-btn');
mobilemenu.addEventListener('click', function() {
    console.log('togglemenu');
    document.getElementById('menu-list').classList.toggle("show");
});

