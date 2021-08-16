import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
} from "../actionTypes";

const initialState = {
    isLoading: false,
    user: null,
    isAuth: false,
    errors: []
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case REGISTER_SUCCESS: {
            return { ...state }
        }

        case REGISTER_ERROR: {
            return { ...state, errors: [...state.errors, action.payload] }
        }

        case LOGIN_LOADING: {
            return { ...state, isLoading: true }
        }

        case LOGIN_SUCCESS: {
            return { ...state, isLoading: false, isAuth: true, user: action.payload }
        }

        case LOGIN_ERROR: {
            return { ...state, isLoading: false, isAuth: false, user: null }
        }

        case LOGOUT: {
            return { ...state, isAuth: false, user: null }
        }

        default:
            return state;
    }
}