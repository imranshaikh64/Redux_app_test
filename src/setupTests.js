import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// Configure Enzyme for the appropriate React adapter
Enzyme.configure({ adapter: new Adapter() });
 //Re-export all enzyme 
 export  * from 'enzyme';
