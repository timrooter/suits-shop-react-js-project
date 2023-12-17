import React from 'react'
import './LogOrReg.css'
import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';

export class LogOrReg extends React.Component {
    componentDidMount() {
        const tabs = document.querySelectorAll('.tabs h3 a');

        tabs.forEach(tab => {
            tab.addEventListener('click', function (event) {
                event.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const tabContent = tab.getAttribute('href');
                document.querySelectorAll('div[id$="tab-content"]').forEach(content => {
                    content.classList.remove('active');
                });
                document.querySelector(tabContent).classList.add('active');
            });
        });
    }
    render() {
        return (
            <div>
                <Header />
                <div className="mainLogOrReg">
                    <div className="form-wrap">
                        <div className="tabs">
                            <h3 className="signup-tab"><a className="active" href="#signup-tab-content" style={{ borderTopLeftRadius: '7px' }}>Sign Up</a></h3>
                            <h3 className="login-tab"><a href="#login-tab-content" style={{ borderTopRightRadius: '7px' }}>Login</a></h3>
                        </div>
                        <div className="tabs-content">
                            <div id="signup-tab-content" className="active">
                                <form className="signup-form" action="" method="post">
                                    <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" />
                                    <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" />
                                    <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                                    <Link to={'/myaccount'}>
                                    <input type="submit" className="button" value="Sign Up" />
                                    </Link>
                                </form>
                                <div className="help">
                                    <p>Регистрируясь, вы соглашаетесь с нашей политикой данных</p>
                                </div>
                            </div>
                            <div id="login-tab-content">
                                <form className="login-form" action="" method="post">
                                    <input type="text" className="input" id="user_login" autoComplete="off" placeholder="Email or Username" />
                                    <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" />
                                    <input type="checkbox" className="checkbox" id="remember_me" />
                                    <label htmlFor="remember_me">Запомнить меня</label>
                                    <Link to={'/myaccount'}>
                                    <input type="submit" className="button" value="Login"/>
                                    </Link>
                                </form>
                                <div className="help">
                                    <p><a href="">Забыли пароль?</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <script src="/js/main.js"></script>
                </div>

                <Footer />
            </div>

        );
    }
}
export default LogOrReg