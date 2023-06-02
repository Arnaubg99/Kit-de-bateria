window.addEventListener("keydown", e=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const div = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!audio)return;
    div.classList.add("selected")
    audio.currentTime = 0;
    audio.play();
})
window.addEventListener("keyup", e=>{
    const div = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!div)return;
    div.classList.remove("selected")
})