// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData
  return (
    <li className="cryptoDetails">
      <div className="currencyName">
        <img src={currencyLogo} alt={currencyName} className="cryptoImg" />
        <p className="coinName">{currencyName}</p>
      </div>
      <div className="cryptoValues">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
