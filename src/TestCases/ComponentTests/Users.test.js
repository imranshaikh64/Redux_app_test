import Users from "../../Components/Users";
import TeamOmegaDropDown from "../../Components/TeamOmegaDropDown";
import TeamOmegaHeader from "../../Components/TeamOmegaHeader";
import { shallow } from "enzyme";
import store from "../../Store/Store";
import CountryDropDown from "../../Components/CountryDropDown";

const setUp = shallow(<Users store={store} />).childAt(0).dive();

describe('Users-test', () => {

    let component, wrapper;
    beforeAll(() => {
        component = setUp;
    });

    describe('Render All data', () => {
        it("Should render without errors", () => {
            let wrapper = component.find(`[data-test="Main_Component"]`);
            expect(wrapper.length).toBe(1);
        });
    });



    describe(' should render Child Component Header', () => {
        describe('Header-test', () => {
            beforeEach(() => {
                wrapper = component.find(TeamOmegaHeader);
            });

            it('Users file should contain Header', () => {
                expect(wrapper.exists()).toEqual(true);
            });

            it("Should render without Errors", () => {
                expect(wrapper.dive().find(`[data-test="TeamOmegaHeader"]`).length).toBe(1);
            });
        });
    });



    describe('TeamOmegaDropDown Component', () => {
        beforeEach(() => {
            wrapper = component.find(TeamOmegaDropDown);
        })

        it('APP should contain regiondata', () => {
            expect(wrapper.exists()).toEqual(true);
        });
    });



    describe('TeamOmegaDropDown2 Component', () => {
        beforeEach(() => {
            wrapper = component.find(CountryDropDown);
        });

        it('APP should contain countrydata', () => {
            expect(wrapper.exists()).toEqual(true);
        });

    });


});

