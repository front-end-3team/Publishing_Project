const $menu_s = document.querySelector('.menu_story');
const $menu_p = document.querySelector('.menu_project');
const $menu_cu = document.querySelector('.menu_culture');
const $menu_co = document.querySelector('.menu_contact');

const $hideMenu = document.querySelectorAll('.hide-menu');
const $bubble = document.querySelectorAll('.speech-bubble');

console.log($hideMenu);
console.log($bubble);

$hideMenu[0].style.height = 0;
$bubble[0].style.display = 'none';

$menu_s.addEventListener('mouseover', () => {
    $hideMenu[0].style.height = `auto`;
    $bubble[0].style.display = `block`;
});

$menu_s.addEventListener('mouseout', () => {
    $hideMenu[0].style.height = 0;
    $bubble[0].style.display = `none`;
});

$hideMenu[1].style.height = 0;
$bubble[1].style.display = 'none';

$menu_p.addEventListener('mouseover', () => {
    $hideMenu[1].style.height = `auto`;
    $bubble[1].style.display = `block`;
});

$menu_p.addEventListener('mouseout', () => {
    $hideMenu[1].style.height = 0;
    $bubble[1].style.display = `none`;
});

$hideMenu[2].style.height = 0;
$bubble[2].style.display = 'none';

$menu_cu.addEventListener('mouseover', () => {
    $hideMenu[2].style.height = `auto`;
    $bubble[2].style.display = `block`;
});

$menu_cu.addEventListener('mouseout', () => {
    $hideMenu[2].style.height = 0;
    $bubble[2].style.display = `none`;
});

$hideMenu[3].style.height = 0;
$bubble[3].style.display = 'none';

$menu_co.addEventListener('mouseover', () => {
    $hideMenu[3].style.height = `auto`;
    $bubble[3].style.display = `block`;
});

$menu_co.addEventListener('mouseout', () => {
    $hideMenu[3].style.height = 0;
    $bubble[3].style.display = `none`;
});
