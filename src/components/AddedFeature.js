import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from'../action/action';

const AddedFeature = props => {
console.log('props', props)
  return (
    <li>
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};


export default connect ( 
  null,
  { removeFeature }
)(AddedFeature);
