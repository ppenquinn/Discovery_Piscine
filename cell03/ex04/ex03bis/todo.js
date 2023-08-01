$(document).ready(function () {
  function ToDo() {
    var task = prompt("Input your new to-do list");
    if (task) {
      let time = new Date().getTime();
      const Task = $("<div>", {
        class: "todo",
        text: task
      });
      Task.prependTo("#ft_list");
      Task.click(function () {
        if (confirm("Do you want to delete?")) {
          $(this).remove();
          document.cookie = time + "=; max-age=0;";
        }
      });
      document.cookie = time + "=" + task;
    }
  }

  function Showoutput() {
    if (document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = cookies.length - 1; i >= 0; i--) {
        let c = cookies[i].split("=");
        const Task = $("<div>", {
          class: "todo",
          text: c[1]
        });
        Task.prependTo("#ft_list");
        Task.click(function () {
          if (confirm("Do you want to delete?")) {
            $(this).remove();
            document.cookie = c[0] + "=; max-age=0;";
          }
        });
      }
    }
  }
  Showoutput();
  $("#new-todo").click(ToDo);
});
