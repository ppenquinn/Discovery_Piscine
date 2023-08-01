function ToDo() {
  var task = prompt("Input your new to-do list");
  if (task) {
    const Task = document.createElement("div");
    Task.innerHTML = task;
    Task.classList.add("todo");
    document.getElementById("ft_list").insertBefore(Task, document.getElementById("ft_list").firstChild);
    Task.addEventListener("click", Finish);
  }
  //console.log(task);
}
function Finish() {
  if (confirm("Do you wana delete?!")) { this.remove(); }

}

window.onload = function () {
  if (document.cookie) {
    document.getElementById("ft_list").innerHTML = document.cookie[1];
  }
};
document.getElementById("new-todo").addEventListener("click", ToDo);
window.onbeforeunload = function () {
  document.cookie = document.getElementById("ft_list").innerHTML; 0.
};
