function ToDo() {
  var task = prompt("Input your new to-do list");
  if (task) {
    let time = new Date().getTime()
    const Task = document.createElement("div");
    Task.innerHTML = task;
    Task.classList.add("todo");
    document.getElementById("ft_list").insertBefore(Task, document.getElementById("ft_list").firstChild);
    Task.addEventListener("click", function () {
      if (confirm("Do you want to delete?")) {
        this.remove();
        //console.log(c[0]);
        document.cookie = time + "=; max-age=0;";
      }
    });
    document.cookie = time + "=" + task;
  }

}

function Showoutput() {
  if (document.cookie != "") {
    const cookies = document.cookie.split(";");
    for (let i = cookies.length - 1; i >= 0; i--) {
      let c = cookies[i].split("=");
      const Task = document.createElement("div");
      Task.innerHTML = c[1];
      Task.classList.add("todo");
      document.getElementById("ft_list").insertBefore(Task, document.getElementById("ft_list").firstChild);
      Task.addEventListener("click", function () {
        if (confirm("Do you want to delete?")) {
          this.remove();
          console.log(c[0]);
          document.cookie = c[0] + "=; max-age=0;";
        }
      });
      console.log(c);
    }
  }
}
window.onload = Showoutput();
document.getElementById("new-todo").addEventListener("click", ToDo);

