import '../components';
// alert('Адаптив обязательно будет доделан, не успеваю из-за основной работы')
let p = document.querySelectorAll('p');
let li = document.querySelectorAll('li');
let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let span = document.querySelector('.header__number');
let element = document.querySelector(".element")
console.log(element);
// p.forEach(item => {
//    item.style.color = 'white';
// })
// li.forEach(item => {
//    item.style.color = 'white';
// })
// h1.forEach(item => {
//    item.style.color = 'white';
// })
// h2.forEach(item => {
//    item.style.color = 'white';
// })

let btn = document.querySelector (".header__theme");
let body = document.querySelector("body");


   // p.forEach(item => {
   //    item.classList.add('white');
   // })
   // l1.forEach(item => {
   //    item.classList.add('white');
   // })
   // h1.forEach(item => {
   //    item.classList.add('white');
   // })
   // h2.forEach(item => {
   //    item.classList.add('white');
   // })



let currentTheme

if(localStorage.getItem("theme") == "dark"){
   body.classList.add("dark")
   p.forEach(item => {
      item.classList.add('white');
   })
   li.forEach(item => {
      item.classList.add('white');
   })
   h1.forEach(item => {
      item.classList.add('white');
   })
   h2.forEach(item => {
      item.classList.add('white');
   })
   span.classList.add('white-span');
   element.classList.add('element-dark');
}


btn.addEventListener("click", () =>{
   body.classList.toggle("dark");
   p.forEach(item => {
      item.classList.toggle('white');
   })
   li.forEach(item => {
      item.classList.toggle('white');
   })
   h1.forEach(item => {
      item.classList.toggle('white');
   })
   h2.forEach(item => {
      item.classList.toggle('white');
   })
   span.classList.toggle('white-span');
   element.classList.toggle('element-dark');
  if(body.classList.contains("dark")){
    currentTheme = "dark"
  }
  localStorage.setItem("theme", currentTheme)
  console.log(localStorage.getItem("theme"))
})