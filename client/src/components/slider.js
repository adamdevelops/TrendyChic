var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.value = 1;
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
