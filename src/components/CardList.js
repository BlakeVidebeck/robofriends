import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const CardList = ({ searchField, robots }) => {
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div>
			{filteredRobots.map(robot => {
				return <Card key={robot.id} robot={robot} />;
			})}
		</div>
	);
};

const mapStateToProps = state => ({
	searchField: state.search.searchField,
	robots: state.robot.robots,
});

export default connect(mapStateToProps)(CardList);
