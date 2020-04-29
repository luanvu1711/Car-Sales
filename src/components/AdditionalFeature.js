import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../action/action';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.addItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect (
  null,
  {addItem}
)(AdditionalFeature);
