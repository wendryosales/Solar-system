import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        id="card-mission"
        className="d-flex
        flex-column
        flex-wrap
        card
        blur"
        data-testid="mission-card"
      >
        <h5 className="card-title" data-testid="mission-name">
          { name }
        </h5>
        <p className="card-text" data-testid="mission-year">
          { year }
        </p>
        <p className="card-text" data-testid="mission-country">
          { country }
        </p>
        <p className="card-text" data-testid="mission-destination">
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
