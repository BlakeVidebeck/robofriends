import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

interface IRobot {
	name: string,
	email: string,
	id: number
}

interface State {
	robots: Array<IRobot>;
	searchField: string
}

const CardList = ({ searchField, robots }: State) => {
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div>
			{filteredRobots.map(robot => {
				return <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id}/>;
			})}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	searchField: state.search.searchField,
	robots: state.robot.robots,
});

export default connect(mapStateToProps)(CardList);
