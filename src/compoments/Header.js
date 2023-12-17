import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'
import { Route, Routes, Link, Outlet, useLocation } from 'react-router-dom'
import './Header.css';

const showOrders = (props) => {
  let totalSum = props.orders.reduce((sum, order) => {
    return sum + Number.parseFloat(order.price) * order.quantity;
  }, 0);

  const handleCheckout = () => {
   
    alert('Оформление заказа на сумму: ' + totalSum + "₸");
  };

  return (
    <div>
      {props.orders.map(order => (
        <Order onDelete={props.onDelete} key={order.id} item={order} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(totalSum)}₸ </p>
      {props.orders.length > 0 && (
        <button className='checkout-button' onClick={handleCheckout}>
          Оформить заказ
        </button>
      )}
    </div>
  );
};



const showNothing = () => {
  return (<div className='empty'>
    <h2>В корзине нет товаров</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <header>
      <div>
        <span className='logo'>Dixon</span>
        <ul className='nav'>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/aboutus">О нас</Link></li>
          <li><Link to="/articles">Статьи</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
          <li><Link to="/logorreg">Кабинет</Link></li>
        </ul>
        <Outlet />

        {isMainPage && (
          <>
            <FaShoppingCart onClick={toggleCart} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  )
}
