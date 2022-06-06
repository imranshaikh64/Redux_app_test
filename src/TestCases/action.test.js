import { getUsers } from '../actions/action';
import moxios from 'moxios';
import store from "../Store/Store";
import configureStore from 'redux-mock-store' ;
import thunk from 'redux-thunk';
import { GET_USERS, USERS_ERROR } from '../actions/actionType';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('-->CountryAction ', () => {

    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    describe('-->fething data', () => {
        
        const storeDetail = mockStore();
        let continent = "asia";
        let expectedState = [
            { name: { common: 'India' } },
            { name: { common: 'China' } },
            { name: { common: 'Nepal' } },
            { name: { common: 'Turkey' } },
            { name: { common: 'srilanka' } }
        ];

        it('should dispatch action-type GET_USERS ',()=>{    
            moxios.wait(()=>{
                const request = moxios.requests.mostRecent(); 
                request.respondWith({
                    status : 200,
                    response: expectedState
                });
            });
           return  storeDetail.dispatch(getUsers())
            .then(()=>{
             const actions = storeDetail.getActions();
              //  console.log("actions",actions)
                expect(actions[0].type).toEqual(GET_USERS);
            })
        })
        
        it("should dispatch action type USERS_ERROR",()=>{
            const errorResp = {
                status: 404,
                response: { message: 'Bad request' }
            }
            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.reject(errorResp)
            })
            return storeDetail.dispatch(getUsers()) 
            .then(()=>{
                const actions = storeDetail.getActions();
               // console.log("error action",actions);
                expect(actions[1].type).toEqual(USERS_ERROR);
            })
         }) 
         
        it('updated state.countries',
            () => {
                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWith({ status: 200, response: expectedState });
                });
                return store.dispatch(getUsers(continent))
                    .then(() => {
                        console.log("storeData", storeDetail.getActions());
                        let { users } = store.getState().users;
                        expectedState = expectedState.map(item => item.name.common)
                        let bool = users == expectedState;
                        expect(bool).toBeTrue;
                    })
            }
        );

        it('check when request gets rejected', () => {
           
            const errorResp = {
                status: 404,
                response: { message: 'Bad request' }
            }

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.reject(errorResp)
            })
            return store.dispatch(getUsers("")).then(() => {
               // console.log(store.getState());
                const error = store.getState().users.error;
                expect(error).toEqual(errorResp.response.message);

            })

        })

    });
});




