function myColor(){
    var color = document.getElementById('colorpicker').value;
    document.body.style.backgroundColor = color;
    document.getElementById('box').value = color;
}
document.getElementById('colorpicker').addEventListener('input',myColor);