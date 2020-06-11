import {
    CREATE_CATEGORY_SUCCESS, 
    CREATE_CATEGORY_FAIL,
    CREATE_COURSE_SUCCESS, 
    CREATE_COURSE_FAIL, 
    CREATE_ROOM_SUCCESS, 
    CREATE_ROOM_FAIL,
    CREATE_COURSE_SESSION_SUCCESS,
    CREATE_COURSE_SESSION_FAIL
} from '../actions/adminDashboardActionTypes'

const initialState = {
    category: null, 
    course: null
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
        case CREATE_COURSE_SUCCESS:
            return {
                ...state, 
                course: action.course
            }
        case CREATE_COURSE_FAIL:
            return {
               ...state,
               }
        case CREATE_ROOM_SUCCESS:
            return {
                ...state, 
                room: action.room
                }
        case CREATE_ROOM_FAIL:
            return {
                ...state,
                }
        case CREATE_COURSE_SESSION_SUCCESS:
            return {
                ...state,
                course_session: action.course_session
            }
        case CREATE_COURSE_SESSION_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }

}


export default createCategoryReducer;


