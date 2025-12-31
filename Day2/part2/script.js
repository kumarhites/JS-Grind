const btn = document.getElementById("btn");
const output = document.getElementById("output");

const input = document.getElementById("nameInput");
const preview = document.getElementById("preview");

input.addEventListener("input", (e) => {
  let text = input.value;
  if(text.length < 3){
    preview.innerText = "Too short";
  }else{
    preview.innerText = "Looks good";
  }
});

input.addEventListener('keyup', (e) => {
  if(e.key === "Enter") alert("Enter pressed");
})


btn.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  output.innerText = "Button clicked!";
});
