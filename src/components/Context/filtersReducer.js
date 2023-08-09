export const initialState = {
    filters: []
}

export const ACTIONS = {
    ADD_FILTER: "add__filter",
    REMOVE_FILTER: "remove__filter"
};


const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_FILTER:
            return {
                ...state,
                filters: action.payload,
            };
        case ACTIONS.REMOVE_FILTER:
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state;
    }
}

export default filtersReducer;