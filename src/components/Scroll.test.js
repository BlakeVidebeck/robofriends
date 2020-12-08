import { shallow } from 'enzyme';
import Scroll from './Scroll';

it('Scroll renders correctly', () => {
	const wrapper = shallow(<Scroll />);
	expect(wrapper).toMatchSnapshot();
});
