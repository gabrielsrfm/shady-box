const h = document.querySelector('#h-shadow');
const v = document.querySelector('#v-shadow');
const blur = document.querySelector('#blur-shadow');
const spread = document.querySelector('#spread-shadow');
const color = document.querySelector('#color-shadow');
const preview = document.querySelector('#preview-box');
const output = document.querySelector('#code-output');

function update() {
    const shadow = `${h.value}px ${v.value}px ${blur.value}px ${spread.value}px ${color.value}`;
    preview.style.boxShadow = shadow;
    output.textContent = `box-shadow: ${shadow};`;
}


[h, v, blur, spread, color].forEach(input => {
    input.addEventListener('input', update);
});

update(); 
