import {  findTestByAttr } from '../app.mock';
import { shallow } from 'enzyme'
import TeamOmegaDropDown from "../../Components/TeamOmegaDropDown";
import sinon from 'sinon';
import { checkProps } from '../app.mock';



let wrapper =(props)=> shallow(<TeamOmegaDropDown {...props}/>);
let event = {target: {value: ""}};
//console.log(wrapper.props());
describe("RegionDropDown ", () => {

     let component, mockFunc;
     describe("regionDropDown Component", () => {
          
          beforeEach(() => {
                mockFunc= sinon.spy();
                let props = { handleChange : mockFunc}
                component = wrapper(props);
          });
           
          it('check classame of teamOmega dropdown',()=>{
               expect(component.exists('.regionDropDown')).toEqual(true);
          })

            it('render data', () =>
            expect(findTestByAttr(component, 'RegionDropDown').exists()).toEqual(true));  
          
            it('should render select tag', () =>
            expect(component.find('select').length).toBe(1));
         
            it("selecting diffrent value through dropdown will pass value to the changeSelect prop", () => {
               component.find('select').simulate('change', event);
               expect(mockFunc.calledOnce).toEqual(true);
               expect(mockFunc.calledWith(event.target.value)).toEqual(true);
               }) 

            it("-->checking proptype", () => {
                    const expectedProps = {
                       handleChange: ()=>{}
                    }
                    const propsError = checkProps(TeamOmegaDropDown, expectedProps);
                    expect(propsError).toBeUndefined();
                });  
     });
     

})