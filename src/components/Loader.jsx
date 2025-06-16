import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({
  height = 50,
  width = 50,
  color = 'blue',
  fullScreen = true,
}) => {
  const style = fullScreen
    ? {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 0,
      }
    : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

  return (
    <div style={style}>
      <ReactLoading type="spin" color={color} height={height} width={width} />
    </div>
  );
};

export default Loader;
