import axios from 'axios';
import { GET_USERS, USERS_ERROR } from './actionType';

export const getUsers = (region) => async dispatch => {
    await axios.get(`https://restcountries.com/v3.1/region/${region}`).then( 
        res => dispatch({
            type: GET_USERS,
            payload: res.data
        })).catch(e => dispatch({
            type: USERS_ERROR,
            payload: e.response.message
        })
        )
}