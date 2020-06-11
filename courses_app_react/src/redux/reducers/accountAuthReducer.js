import {
    LOAD_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/accountActionTypes';
  
  import Cookies from 'js-cookie'
  
  const initialState = {
    token: null,
    isAuthenticated: null,
    user: null,
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: action.user,
        }
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        Cookies.set('token', action.token)
        return {
          ...state,
          action: action.token,
          isAuthenticated: true,
          user: action.user,
        }
      case LOGIN_FAIL:
      case REGISTER_FAIL:
      case LOGOUT_SUCCESS:
        Cookies.remove('token')
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
        }
       case LOGOUT_FAIL:
         return {
           ...state,
           isAuthenticated: true,
         } 
      default:
        return state
    }
  }
  
  export default authReducer