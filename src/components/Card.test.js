import { shallow } from 'enzyme';
import Card from './Card';

it('Card renders correctly', () => {
	const mockRobot = {
		id: '1',
		name: 'JohnWick',
		email: 'johnwick@gmail.com',
	};
	const wrapper = shallow(<Card robot={mockRobot} />);
	expect(wrapper).toMatchSnapshot();
});
