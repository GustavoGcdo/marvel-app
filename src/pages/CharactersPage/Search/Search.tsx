import React, { useState } from 'react';
import './Search.scss';

type Props = { onChange?: (value: string) => void };

const Search: React.FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState('');

  const onChangeValue = (value: string) => {
    setValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="search-container">
      <span className="search-label">Search</span>
      <input
        value={value}
        onChange={(event) => onChangeValue(event.target.value)}
        className="search-input"
        type="search"
        placeholder="Find by character name"
      />
    </div>
  );
};

export default Search;
