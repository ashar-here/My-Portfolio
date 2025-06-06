// Changing color of name on the HOVER event:
let myName_heading = document.getElementById('myName_heading');
console.log(myName_heading.classList)
myName_heading.addEventListener('mouseover', ()=>{
    myName_heading.classList.remove('red'); 
    myName_heading.classList.add('white'); 
})
myName_heading.addEventListener('mouseout', ()=>{
    myName_heading.classList.toggle('red'); 
    myName_heading.classList.toggle('white'); 
})

// Creating an animation of changing colors constantly in some seconds:
let cyber_text = document.getElementById('cyber');
let expert_text = document.getElementById('expert');
const redColorforCyberText = ()=>{
    cyber_text.classList.toggle('red');
}
const redColorforExpertText = ()=>{
    expert_text.classList.toggle('red');
}

setInterval(redColorforCyberText, 2000)
setInterval(redColorforExpertText, 2000)
