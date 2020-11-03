import React from 'react';

import './styles.css';

export default props => {
  let classes = 'button '
  classes += props.solid ? 'solid' : ''
  classes += props.outline ? 'outline' : ''

  return (
    <button
      onClick={e => props.click && props.click(props.label)}
      className={classes}
      // disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}