import React from 'react'
import {useParams} from "react-router-dom";
function Stock (props) {
  
  const {symbol} = useParams()//Use clicked stock symbol
  console.log(`${symbol}`)
  const stocks = props.stockData.filter( d => d.symbol === symbol)
  const stock = stocks[0]
  return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  )
}


export default Stock
