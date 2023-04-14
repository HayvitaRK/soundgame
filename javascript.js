// alert("hi");
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) // to set fn for all btns in loop
{
  document.querySelectorAll(".btn")[i].addEventListener("click", fn); //  on btn press
  function fn() {
    this.style.color = "white";
    var curbtn = this.innerHTML;
    keyb(curbtn); //sound fn call
    timeout(curbtn); // time delay fn
  }


}

document.addEventListener("keypress", function(event) { // on key press (event here is the keypressed)
  keyb(event.key); // sound fn call
  timeout(event.key);
});


function keyb(key) // sound fn
{
  switch (key) {
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "b":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "c":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    default:
      alert("Wrong button pressed");
  }
}

function timeout(value){
  var time=document.querySelector("."+ value);
  time.classList.add("onclick");
  setTimeout(function()
  {
    time.classList.remove("onclick")
    
  },500);
}
