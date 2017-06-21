var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {
    beforeEach(() =>{
        localStorage.removeItem("todos");
    });
    it("should exist", () => {
        expect(TodoAPI).toExist();
    });

    describe("setTodos", () =>{
        it("should set valid todos array", ()=>{
            var todos = [{
                id: 15,
                text: "test all files",
                completed: false
            }];
        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem("todos"));
        // use to equal for Objects and Arrays
        expect(actualTodos).toEqual(todos);
        });
        it("should not set invalid todos array",() =>{
            var badTodos = {a: "b"};
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem("todos")).toBe(null);
        });
    });

    describe("getTodos", () =>{
        it("should return empty array for bad localStorage data", () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it("should return todos if valid array in localStorage", () => {
            var todos = [{
                id: 15,
                text: "test all files",
                completed: false
            }];
            localStorage.setItem("todos", JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);

        });
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

        it("should delete todo with given id", () => {
            var todos = [{
                id: 15,
                text: "test all files",
                completed: false
            }];
            localStorage.setItem("todos", JSON.stringify(todos));

            var remainingTodos = TodoAPI.removeTodo(15);

            expect(remainingTodos.length).toBe(0);
        })
    });
    
});