import {shallow} from 'enzyme';
import TeamOmegaHeader from '../../Components/TeamOmegaHeader';
import {checkProps} from '../app.mock';

describe('check Header component',()=>{
    let wrapper = shallow(<TeamOmegaHeader/>);
    it('should render h1 tag',()=>{
      expect(wrapper.exists('h1')).toEqual(true);   
    });

    it("-->checking proptype", () => {
      const expectedProps = {
         Value: ""
      }
      const propsError = checkProps(TeamOmegaHeader, expectedProps);
      expect(propsError).toBeUndefined();
  });
})