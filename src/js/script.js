const hShadow = document.querySelector('#h-shadow');
const vShadow = document.querySelector('#v-shadow');
const preview = document.querySelector('#preview');
const codeOutput = document.querySelector('#code-output');

function updateShadow() {
   
    const h = hShadow.value;
    const v = vShadow.value;
    

    const shadowString = `${h}px ${v}px 15px rgba(0, 0, 0, 0.5)`;
    
   
    preview.style.boxShadow = shadowString;
    codeOutput.innerText = `box-shadow: ${shadowString};`;
}


hShadow.addEventListener('input', updateShadow);
vShadow.addEventListener('input', updateShadow);


updateShadow();
