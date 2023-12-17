import React from 'react';
import Header from "../../compoments/Header";
import Footer from "../../compoments/Footer";
import './Account.css'


class Account extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content-block">
                    <div className="image-acc">
                        <img src="img/ava.jpg" alt="Изображение" />
                    </div>
                    <div className="info">
                        <h2>My account</h2>
                        <div className="infor-item">
                            <div className="icon-for-acc">
                                <img src="img/icons/account.png" alt="icon1" />
                            </div>
                            <div className="text-info">
                                <h3>Name:</h3>
                                <p>*NAME* + *SURNAME*</p>
                            </div>
                        </div>
                        <div class="infor-item">
                            <div class="icon-for-acc">
                                <img src="img/icons/mail.png" alt="icon1" />
                            </div>
                            <div className="text-info">
                                <h3>Email:</h3>
                                <p>*EMAIL*</p>
                            </div>
                        </div>
                        <div className="infor-item">
                            <div className="icon-for-acc">
                                <img src="img/icons/address.png" alt="icon1" />
                            </div>
                            <div className="text-info">
                                <h3>Address</h3>
                                <p>Алматы, ул. Назарбаева, 13 дом, 56 кв.</p>
                            </div>
                        </div>
                        <div className="infor-item">
                            <div className="icon-for-acc">
                                <img src="img/icons/bonuses.png" alt="icon1" />
                            </div>
                            <div className="text-info">
                                <h3>Bonuses</h3>
                                <p>У вас на балансе <a href="" className="bonus-balance">12200₸</a></p>
                            </div>
                        </div>
                        <div className="infor-item">
                            <div className="icon-for-acc">
                                <img src="img/icons/cart.png" alt="icon1" />
                            </div>
                            <div className="text-info">
                                <h3>Cart</h3>
                                <p> Ваша корзина <a href="" className="bonus-balance">пуста</a></p>
                            </div>
                        </div>
                        <button className="edit-info">Изменить данные</button>
                    </div>
                </div>
                <div className="contact-container">
                    <div className="contact-us">
                        <h2>Нужна помощь? Свяжитесь с нами</h2>
                        <p>Телефон: +77009998080</p>
                        <p>Email: kazakhoff@business.com</p>
                    </div>
                    <div className="contact-form">
                        <h2>Или напишите прямо сюда!</h2>
                        <form>
                            <label htmlFor="name">Email:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="message">Сообщение:</label>
                            <textarea id="message" name="message" rows="4" required />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Account;