// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Styles imports
import './styles.scss';

// == Composant
const CurrencyHeader = ({currentAmount, changeCurrentAmount}) => {
    const handleChange = (event) => {
      changeCurrentAmount(event.target.value);
    };
    
    return (
      <header className="currency-header">
        <h1 className="text-strong">Converter</h1>
        <p>
          <input 
            type="number"
            className="currency-header-amount"
            onChange={handleChange}
            value={currentAmount}
          />
          euro(s)
        </p>
      </header>
    );
}

CurrencyHeader.propTypes = {
  currentAmount: PropTypes.number.isRequired,
  changeCurrentAmount: PropTypes.func.isRequired,
};


// == Export
export default CurrencyHeader;
