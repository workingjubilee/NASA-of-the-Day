import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { getPhoto } from '../actions';

const NASAPhoto = props => {
  const fetchPhoto = e => {
    e.preventDefault();
    props.getPhoto();
  };

  return (
    <>
      <h2>NASA Photo of the day 🚀</h2>
      <div>
        <img src={props.photoOfTheDay} alt="NASA Photo of the day" />
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <Button color="info" onClick={fetchPhoto}>
        🛰 See today's photo 📸
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  photoOfTheDay: state.photoOfTheDay,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getPhoto }
)(NASAPhoto);
