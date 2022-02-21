import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const travel = missions.map((el) => {
      const { name, year, country, destination } = el;
      return (
        <MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      );
    });

    return (
      <>
        <div className="h2-title">
          <Title headline="Missões" />
        </div>
        <div
          data-testid="missions"
        >
          <div
            id="container-cards"
            className="container
            d-flex
            justify-content-center
            flex-wrap"
          >
            { travel }
          </div>
        </div>
      </>
    );
  }
}

export default Missions;
