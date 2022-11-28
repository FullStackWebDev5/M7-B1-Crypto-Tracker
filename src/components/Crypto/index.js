import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Spinner } from "react-bootstrap";
import "./index.css";
import CryptoRow from "./CryptoRow";

const Crypto = () => {
  const [cryptoCoins, setCryptoCoin] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => setCryptoCoin(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
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
    </Container>
  );
};

export default Crypto;
