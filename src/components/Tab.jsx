import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { downloadCanvasToImage } from '../config/helpers';

function Tab({ tab, isFilterTab, isActiveTab, handleClick }) {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${isActiveTab ? 'rounded-full glassmorhism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      {tab.name === 'download' ? (
        <img
          src={tab.icon}
          alt={tab.name}
          className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-1/12 object-contain'}`}
          onClick={() => downloadCanvasToImage()}
          title={tab.desc}
        />
      ) : (
        <img
          src={tab.icon}
          alt={tab.name}
          title={tab.desc}
          className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-1/12 object-contain'}`}
        />
      )}
    </div>
  );
}

export default Tab;
