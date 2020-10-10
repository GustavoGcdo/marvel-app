import React from 'react';
import './Loading.scss';

type Props = {
  isLoading: boolean;
};

const Loading: React.FC<Props> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className={`loading-container`}>
          <span className="loading-text">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Loading;
