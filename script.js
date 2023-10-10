const icon= document.querySelector(".fa-solid ");
const iconh= document.querySelector(".none");

console.log(icon);
console.log(iconh);

icon.addEventListener("mouseenter",()=>{
	iconh.style.background="red";

})

icon.addEventListener("mouseleave",()=>{
	iconh.style.top="-100px";

})