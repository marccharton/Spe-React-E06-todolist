// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Import data
import currencies from '../../data/currencies';

// == Imports Composants
import CurrencyHeader from '../CurrencyHeader';
import CurrencyList from '../CurrencyList';
import CurrencyFooter from '../CurrencyFooter';

// == Composant
class CurrencyConverter extends React.Component {
  
  state = {
    currency: currencies[0],
    currencyList: currencies,
    currentAmount: 1,
  }

  handleChangeCurrency = (event) => {
    const newCurrency = this.state.currencyList.find((item) => {
      return item.name === event.target.innerText;
    });

    this.setState({
      ...this.state,
      currency: newCurrency,
    });
  }

  setCurrentAmount = (value) => {
    this.setState({
      ...this.state,
      currentAmount: value,
    })
  }

  render() {
    
    const {currencyList, currency, currentAmount} = this.state;

    return (
      <div className="currency-converter">
          <CurrencyHeader currentAmount={currentAmount} changeCurrentAmount={this.setCurrentAmount}/>
          <CurrencyList currencyList={currencyList} handleClick={this.handleChangeCurrency}/>
          <CurrencyFooter value={currentAmount} currency={currency} />
      </div>
    );
  }
}

export default CurrencyConverter;
