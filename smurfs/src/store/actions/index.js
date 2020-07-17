import axios from 'axios';

export const FETCH_SMURF = "FETCH_SMURF";
export const fetchSmurf = () => {
    return { type: 'FETCH_SMURF' };
};

export const POST_SMURF = 'POST_SMURF';
export const postSmurf = () => {
    return { type: 'POST_SMURF' };
};

export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const smurfSuccess = () => {
    return { type: 'SMURF_SUCCESS' };
};

// action type,creator(function), returns an object 
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const smurfFailure = () => {
    return { type: 'SMURF_FAILURE' };
};

export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (newSmurf) => {
    // console.log('addSmurf called: ' + JSON.stringify(newSmurf));
    return { type: ADD_SMURF, payload: newSmurf };
};


export const smurfActions = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF })
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({ type: SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: SMURF_FAILURE, payload: err.message })
            });
    };
};

export const addnewSmurf = (newSmurf) => {
    return dispatch => {
        dispatch({ type: POST_SMURF })
        axios
            .post(`http://localhost:3333/smurfs/`, {...newSmurf})
            .then(res => {
                dispatch({ type: SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: SMURF_FAILURE, payload: err.message })
            });
    };
};