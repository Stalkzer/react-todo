var $ = require("jquery");


module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem("todos");
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    removeTodo: function (todoId) {
        var todos = this.getTodos();
        return todos.filter((todo) => todo.id !== todoId);
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
            filteredTodos = filteredTodos.filter((todo) => {
                var text = todo.text.toLowerCase();
                return searchText.length === 0 || text.indexOf(searchText) > -1;
            });
        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                // a should come before b
                return -1;
            } else if (a.completed && !b.completed) {
                // b should come before a
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};