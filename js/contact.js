// console.log('aaaa');

const $checkbox = document.querySelector('.form_checkbox');
const $servicebtn = document.querySelector('.service_btn');

console.log($checkbox);
console.log($servicebtn);

$checkbox.addEventListener('click', () => {
    if ($checkbox.checked) {
        $servicebtn.style.backgroundColor = '#49504e';
    }
});
