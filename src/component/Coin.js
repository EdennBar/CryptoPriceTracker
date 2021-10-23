import './Coin.css';

const Coin = ({image,name,symbol,price,volume,priceChange,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="Crypto"></img>
                    <h1>{name}</h1>
                    <p className='coin-symbole'>{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume}</p>
                  {priceChange < 0 ?( 
                  <p className="coin-percent red">{priceChange}%</p>):(<p className="coin-percent green">{priceChange}%</p>)}
                  <p className="coin-marketcap">
                      Mkt Cap:${marketcap}
                  </p>
                </div>
                
            </div>

        </div>
    );
}

export default Coin;
