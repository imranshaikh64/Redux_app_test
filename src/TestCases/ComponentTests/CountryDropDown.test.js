import { checkProps, findTestByAttr } from '../app.mock';
import { mount, shallow } from 'enzyme'
import store from '../../Store/Store';
import CountryDropDown from '../../Components/CountryDropDown';



let wrapper = (props = {}) => shallow(<CountryDropDown {...props} store={store} />).childAt(0).dive();

//console.log(wrapper.props());
describe("TeamOmegaDropdown2 check", () => {
     let component, props;
     describe("TeamOmegaDropDown2 Component", () => {
          beforeEach(() => {
               component = wrapper(props)
          });
          
          it('render data', () => {
               expect(findTestByAttr(component, 'Countrydropdown').exists()).toEqual(true);
              // console.log("wrapper", wrapper);
          })


          it(' check classname countrydropdown', () => {
               expect(component.find('.CountryDropDown').exists()).toEqual(true);
          });

          it('should render select tag', () => {
               expect(component.find('select').exists()).toEqual(true);

          });


     });

})
