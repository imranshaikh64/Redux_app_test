import { GET_USERS, USERS_ERROR } from "../actions/actionType";
import Reducer, { initialState } from "../Reducer/reducer";

describe('Country Reducer', () => {

  it('Should return default state', () => {
    let newState = Reducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('return new state with countryList if pass type GET_USERS', () => {
    let countries = ["India", "China", "Turkey"];
    let newState = Reducer(undefined, {
      type: GET_USERS,
      payload: countries
    });
    expect(newState.users).toEqual(countries);

  });

  it('-->return new state with error if pass type USERS_ERROR', () => {
    let message = "Bad request"
    const newState = Reducer(undefined, {
      type: USERS_ERROR,
      payload: message
    });
    expect(newState.error).toEqual(message);

  });

});