import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

function CustomButton({ type, title, customeStyles, handleClick }) {
  const snape = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snape.color,
        color: getContrastingColor(snape.color),
      };
    } else if (type == 'outline') {
      return {
        backgroundColor: snape.color,
        borderWidth: '1px',
        borderCOlor: snape.color,
        color: getContrastingColor(snape.color),
      };
    }
  };
  return (
    <button
      onClick={handleClick}
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customeStyles}`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
