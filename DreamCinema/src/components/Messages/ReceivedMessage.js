import React from 'react';
import propTypes from 'prop-types';

import './ReceivedMessage.css';


function ReceivedMessage({ message }) {
  return (

    <div className="received-message-container">
      <div className="received-message" style={{ backgroundColor: '#9B0303', fontWeight: 'bold' }}>
        <div className="received-message-value">{message.value}</div>
      </div>
    </div>
  );
}

ReceivedMessage.propTypes = {
  message: propTypes.object.isRequired,
};

export default ReceivedMessage;
