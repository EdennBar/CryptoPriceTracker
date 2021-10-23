import axios from "axios";
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Coin from "./Coin";
import './Crypto.css'
const Crypto = () => {
    const [cryptoSearch, setCryptoSearch] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
            setCryptoSearch(response.data)
            console.log(response.data)
        }).catch(err => console.log(err))

    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }


    //     async function crypto(){
    //         try{
    //             const response=await axios.get('')
    //             setCryptoSearch(response.data)
    //         }catch(err){
    //             console.error(err)
    //         }
    //     }

    // useEffect(()=>{
    //     crypto()
    // },[])

    const filteredCoins = cryptoSearch.filter(cryptoSearch =>
        cryptoSearch.name.toLowerCase().includes(search.toLowerCase())
    );







    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a cuurency</h1>
                <form>

                    <input  className="coin-input" type="text" placeholder="Search for Your Crypto..." onChange={handleChange}></input>
                </form>
            </div>
            <div>
                {
                    // cryptoSearch.map((crypto) => {
                    //     return <div key={crypto.id}>

                    //         {crypto.name}
                    //         {crypto.image}
                    //         {crypto.current_price}
                    //         {crypto.ath_change_percentage}
                    //     </div>

                    // })
                    filteredCoins.map((crypto) => {
                        return( 
                        <Coin
                            key={crypto.id}
                            name={crypto.name}
                            image={crypto.image}
                            symbol={crypto.symbol}
                            marketcap={crypto.market_cap}
                            price={crypto.current_price}
                            priceChange={crypto.price_change_percentage_24h}
                            volume={crypto.total_volume}
                        />
                        );

                    })








                }
            </div>
        </div>
    );
}

export default Crypto;

