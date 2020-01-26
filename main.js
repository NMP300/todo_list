const app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: []
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (error) {
        localStorage.removeTodo("todos");
      }
    }
  },
  methods: {
    addTodo: function (event) {
      if (this.newTodo === "") {
        return;
      } else {
        let todo = {
          id: Math.random()
              .toString(36)
              .slice(2),
          name: this.newTodo,
          isDone: false
        };
        this.todos.push(todo);
        this.newTodo = "";
        this.saveTodos();
      }
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    saveTodos() {
      let parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    }
  }
});
