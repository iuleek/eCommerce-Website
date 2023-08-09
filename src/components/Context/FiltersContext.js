import { useReducer, createContext, useContext } from "react";
import reducer, { initialState , ACTIONS } from "./filtersReducer";


export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addFilter = (filter) => {
        const updatedFilters = state.filters;
        updatedFilters.push(filter);

        dispatch({ type: ACTIONS.ADD_FILTER, payload: updatedFilters });
    }

    const removeFilter = (filter) => {
        const updatedFilters = state.filters.filter((currentFilter) => currentFilter.id !== filter.id);

        dispatch({ type:ACTIONS.REMOVE_FILTER, payload: updatedFilters})
    }

    const value = {
        filters: state.filters,
        addFilter,
        removeFilter,
    }

    return <FiltersContext.Provider value={value}>
        {children}
    </FiltersContext.Provider>
}
