// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import data
import currencies from '../../data/currencies';

// == Styles imports
import './styles.scss';

// == Composant
const CurrencyList = ({currencyList, handleClick}) => {

    const list = currencyList.map((currency) => {
      return (
        <li key={currency.name} className="currency-list-item" onClick={handleClick}>
          <a href="#">{currency.name}</a>
        </li>
      );
    });

    return (
      <div className="currency-list">
        <p className="currency-list-title text-strong">Currencies</p>
        <ul>{list}</ul>
      </div>
    );
};

CurrencyList.propTypes = {
  currencyList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
};

// == Export
export default CurrencyList;
