import {
    CREATE_CATEGORY_SUCCESS, 
    CREATE_CATEGORY_FAIL
} from '../actions/adminDashboardActionTypes'

const initialState = {
    category: null
}

const createCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state, 
                category: action.category
            }
        case CREATE_CATEGORY_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default createCategoryReducer