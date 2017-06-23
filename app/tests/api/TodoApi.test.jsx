var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {
    beforeEach(() =>{
        localStorage.removeItem("todos");
    });
    it("should exist", () => {
        expect(TodoAPI).toExist();
    });

    describe("filterTodos", () => {
        var todos = [{
            id: 1,
            text: "Random text",
            completed: true
        },{
            id: 2,
            text: "Some more random text",
            completed: false
        },{
            id: 3,
            text: "Random text",
            completed: true
        }];

        it("should return all items if showCompleted is true", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, "");

            expect(filteredTodos.length).toBe(3);

        });

        it("should return only non-completed todos if showCompleted is false", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, "");

            expect(filteredTodos.length).toBe(1);
        });

        it("should sort by completed status", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, "");

            expect(filteredTodos[0].completed).toBe(false);
        });

        it("should return the todo that match the search", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, "some");

            expect(filteredTodos.length).toBe(1);
        });

        it("should return all the todos if searchText is empty", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, "");

            expect(filteredTodos.length).toBe(3);
        });

    });
    
});