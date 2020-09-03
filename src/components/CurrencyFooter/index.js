// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Styles imports
import './styles.scss';

// == Composant
const CurrencyFooter = ({value, currency}) => {
    return (
      <div className="currency-footer">
        <h1 className="currency-footer-title text-strong">{Number((value * currency.rate).toFixed(2))}</h1>
        <p className="currency-footer-value text-light">{currency.name}</p>
      </div>
    );
}

CurrencyFooter.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }),
};

// == Export
export default CurrencyFooter;
