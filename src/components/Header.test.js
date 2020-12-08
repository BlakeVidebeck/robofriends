import { shallow } from 'enzyme';
import Header from './Header';

it('Header renders correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();
});
