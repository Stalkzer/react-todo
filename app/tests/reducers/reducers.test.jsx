var expect   = require("expect"),
    reducers = require("reducers"),
    df       = require("deep-freeze-strict");
    

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
});