const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorTxt = document.querySelector('.color');

btn.addEventListener('click',function(){
    var rnd = randomNum();
    document.body.style.background = colors[rnd];
    colorTxt.textContent = colors[rnd];

})

function randomNum(){
    return Math.floor(Math.random() * colors.length);
}
