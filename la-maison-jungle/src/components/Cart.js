function Cart() {
  const monsteraPrice = 8
  const lierrePrice = 10
  const fleursPrice = 15
  const total = monsteraPrice + lierrePrice + fleursPrice
  return (
    <div>
      <h2> Panier : </h2>
      <ul>  
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : {lierrePrice}€</li>
        <li>Fleurs : {fleursPrice}€</li>
      </ul>
      <p>Total : {total}€</p>
    </div>
  )
}

export default Cart