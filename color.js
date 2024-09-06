document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.getElementById('colorValue');

    colorInput.addEventListener('input', function() {
        const selectedColor = colorInput.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorValue.textContent = selectedColor;
        document.body.style.backgroundColor = selectedColor; // Change background color
    });
});

// document.addEventListener('DOMContentLoaded', function() { ... });: Ithu page completely load aayittum, script execute cheyyan wait cheyyunnu.

// const colorInput = document.getElementById('colorInput');: Color picker input field-ine reference edukkunnu.
// const colorDisplay = document.getElementById('colorDisplay');: Color display div-ine reference edukkunnu.
// const colorValue = document.getElementById('colorValue');: Color value paragraph-ine reference edukkunnu.
// colorInput.addEventListener('input', function() { ... });: Color picker input-ile value change aayal trigger cheyyunna event listener aanu.

// const selectedColor = colorInput.value;: Color picker-ilo ninnum selected color edukkunnu.
// colorDisplay.style.backgroundColor = selectedColor;: Color display div-ine background color selected color aayi set cheyyunnu.
// colorValue.textContent = selectedColor;: Color value paragraph-ile text selected color aayi update cheyyunnu.
// document.body.style.backgroundColor = selectedColor;: Page-inde background color selected color aayi set cheyyunnu.