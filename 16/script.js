const flipCard = document.querySelector(".flip-card");
const optionLink = document.getElementById("optionLink");
const textChange = document.getElementById("option");
const infoText = document.querySelector(".info-text");

optionLink.addEventListener("click", ()=>{
     flipCard.classList.toggle("active");
     textChange.classList.toggle("active");
     infoText.classList.toggle("active");
})