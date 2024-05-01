import React from 'react';
import { PropagateLoader } from 'react-spinners';

const GlobalSpinner = ({ loading, color }) => {
  return (
    <div>
      <PropagateLoader color={color} loading={loading} size={20} />
    </div>
  );
};

export default GlobalSpinner;
