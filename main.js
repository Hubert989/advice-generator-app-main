const id = document.querySelector(".id");
const advice_text = document.querySelector(".advice-text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(res => {
        const id_generator = res.slip.id;
        const advice = res.slip.advice;
        
        id.textContent = id_generator;
        advice_text.textContent = advice;
        console.log(res);
    }) 
});