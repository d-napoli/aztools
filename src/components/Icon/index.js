import React from 'react';

const Icon = props => {
  const styles = {
    svg: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      webkitTransform: 'translate(-50%, -50%)',
      // display: 'inline-block',
      // verticalAlign: 'middle',
      // margin: '0 auto'
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   size: PropTypes.number,
//   color: PropTypes.string,
// };

Icon.defaultProps = {
  size: 16,
};

export default Icon;