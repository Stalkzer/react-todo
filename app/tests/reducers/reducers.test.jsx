var expect   = require("expect"),
    reducers = require("reducers"),
    df       = require("deep-freeze-strict"),
    moment   = require("moment");
    

describe("Reducers", () => {
    describe("searchTextReducer", () => {
        it("should set searchText", () => {
            var action = {
                type: "SET_SEARCH_TEXT",
                searchText: "cat"
            };

            var res = reducers.searchTextReducer(df(""), df(action));

            expect(res).toEqual(action.searchText);
        });

        it("showCompletedReducer", () => {
            var action = {
                type: "TOGGLE_SHOW_COMPLETED"
            };

            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
    describe("todosReducer", () => {
        it("should add new todo", () => {
            var action = {
                type: "ADD_TODO",
                todo: {
                    id: "abc123",
                    text: "Todo text",
                    completed: false,
                    createdAt: 454878
                }
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });
        it("should update todo", () => {
            var todos = [
                {
                    id: 12,
                    text: "Walk dog",
                    completed: true,
                    createdAt: 255,
                    completedAt: 255
                }
            ];
            var updates = {
                completed: false,
                completedAt: null
            }
            var action = {
                type: "UPDATE_TODO",
                id: todos[0].id,
                updates
            };

            var res = reducers.todosReducer(df(todos), df(action));
            
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });
        it("should delete todo", () => {
            var todos = [
                {
                    id: 15,
                    text: "Feed cat",
                    completed: true,
                    createdAt: 150,
                    completedAt: 168                  
                },
                {
                    id: 25,
                    text: "Wash car",
                    completed: false,
                    createdAt: 150,
                    completedAt: 168                     
                }
            ];
            var action = {
                type: "REMOVE_TODO",
                id: 15
            }

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res.length).toBe(1);
        });

        it("should add existing todos", () => {
            var todos = [{
                id: "111",
                text: "random",
                completed: false,
                completedAt: undefined,
                createdAt: 54464
            }];
            var action = {
                type: "ADD_TODOS",
                todos
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);

        });

        it("should clear todos on logout", () => {
            var todos = [{
                id: "111",
                text: "random",
                completed: false,
                completedAt: undefined,
                createdAt: 54464
            }];
            var action = {
                type: "LOGOUT"
            };

            var res = reducers.todosReducer(df(todos), df(action));
        
            expect(res.length).toEqual(0);
        })
    });

    describe("authReducer", () => {
        it("should store user id on LOGIN", () => {
            const action = {
                type: "LOGIN",
                uid: 123
            };
            const res = reducers.authReducer(undefined, df(action));

            expect(res).toEqual({
                uid: action.uid
            });
        });
        
        it("should clear auth on LOGOUT", () => {
            const authData = {
                uid: "123bbb"
            };
            const action = {
                type: "LOGOUT"
            };

            const res = reducers.authReducer(df(authData), df(action))
            
            expect(res).toEqual({});
        });
    });
});