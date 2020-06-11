import * as actionTypes from './adminDashboardActionTypes';

export const createCategorySuccess = (response) => {
    return {
        type: actionTypes.CREATE_CATEGORY_SUCCESS, 
        category: response.category,
    }
} 

export const createCategoryFail = (response) => {
    return {
        type: actionTypes.CREATE_CATEGORY_FAIL, 
    }
} 

export const createCourseFail = (response) => {
    return {
        type: actionTypes.CREATE_COURSE_FAIL, 
    }
} 

export const createCourseSuccess = (response) => {
    return {
        type: actionTypes.CREATE_COURSE_SUCCESS, 
    }
} 


export const createRoomFail = (response) => {
    return {
        type: actionTypes.CREATE_ROOM_FAIL, 
    }
} 

export const createRoomSuccess = (response) => {
    return {
        type: actionTypes.CREATE_ROOM_SUCCESS, 
    }
} 
