// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoCurrencyData: []}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()
    const fetchedData = cryptoData.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({isLoading: false, cryptoCurrencyData: fetchedData})
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="main-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptoImage"
            />
            <div className="trackerContainer">
              <div className="trackerHeadings">
                <p className="head">Coin Type</p>
                <div className="currencyName">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </div>
              {cryptoCurrencyData.map(each => (
                <CryptocurrencyItem cryptoData={each} key={each.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
