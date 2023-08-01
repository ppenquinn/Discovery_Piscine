let color = "rgb(";
document.getElementById("demo").innerHTML = color;
for (let i = 0; i < 3; i++) {
  color += Math.floor(Math.random() * 256);
  if (i < 2) { color += ","; }
  else { color += ")"; }
}
document.getElementById("demo").innerHTML = color;
return color;
