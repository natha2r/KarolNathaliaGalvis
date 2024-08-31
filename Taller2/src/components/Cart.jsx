import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>
        <img src="/resources/carrito.png" alt="Carrito" className="cart-icon" />
        Total: ${total.toFixed(2)}
      </h2>
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span> - ${item.price}
            <button
              className="button-eliminar"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
