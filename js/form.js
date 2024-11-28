const nextBtnOne = document.getElementById('next-btn-one');
const nextBtnTwo = document.getElementById('next-btn-two');
const formOne = document.getElementById('form-step-one');
const fromTwo = document.getElementById("form-step-two");
const formThree  = document.getElementById("form-step-three");



nextBtnOne.addEventListener('click', ()=>{
    
    formOne.classList.add('d-none');
    fromTwo.classList.remove("d-none");
});
nextBtnTwo.addEventListener('click', ()=>{
    fromTwo.classList.add("d-none");
    formThree.classList.remove("d-none")
})

const secform = ()=>{
    formThree.classList.add("d-none");
    fromTwo.classList.remove('d-none');
}

const firstform = ()=>{
    fromTwo.classList.add("d-none");
    formOne.classList.remove('d-none');
}

