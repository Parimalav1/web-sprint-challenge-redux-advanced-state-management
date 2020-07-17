import { FETCH_SMURF, SMURF_SUCCESS, SMURF_FAILURE, ADD_SMURF } from '../actions';

const initialSmurfData = {
    res: [{
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
        },
        {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
        }
    ],
    isLoading: false,
    error: ''
};


export const reducer = (state = initialSmurfData, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case ADD_SMURF:
            return {
                ...state,
                isLoading: false,
                res: [...state.res, action.payload]
            };
        case SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                res: action.payload,
            };
        case SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};