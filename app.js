const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// form validation

document.getElementById("sendbtn").addEventListener("click",()=>{
//   let usernamepattern =/(?=.*[a-zA-z])/g
// let usernamematch = document.getElementById("name").value.match(usernamepattern);
console.log("helooo");
// if(usernamematch){
//   alert("ok")
// }
// else{
//   alert('no')
// }

})




