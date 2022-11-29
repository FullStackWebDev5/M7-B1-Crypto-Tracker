import { useEffect } from "react"
import axios from "axios"
import { Table, Spinner } from "react-bootstrap"
import "./index.css"
import { useSelector, useDispatch } from 'react-redux'
import CryptoRow from "./CryptoRow"
import { saveCoins } from '../../redux/crypto/action'

const Crypto = () => {
	const cryptoCoins = useSelector((store) => store.coinsReducer.coins)
	const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => dispatch(saveCoins(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      {cryptoCoins.length ? (
        <Table hover variant="dark">
          <tbody>
            {cryptoCoins.map((coin) => (
              <CryptoRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </Table>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default Crypto;
