import App from './App';
import {shallow} from 'enzyme'

const setUp = shallow(<App />);

describe('App component-test', () => {

    let component;
    beforeAll(() => {
        component = setUp;
    });

    describe('Render All data', () => {
        it("Should render without errors", () => {
            let wrapper = component.find(`[data-test="App_Component"]`);
            expect(wrapper.length).toBe(1);
        });
    });

});
