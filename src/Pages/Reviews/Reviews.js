import React, { Component } from 'react'
import Header from '../../compoments/Header'
import '../Reviews/Reviews.css'
import Review from './Review'
import AddReview from './AddReview'
import Footer from '../../compoments/Footer'
import axios from 'axios'

const baseUrl = "https://reqres.in/api/users?page=2"

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.addReview = this.addReview.bind(this);
        this.state = {
            reviews: []
        };
    }

    componentDidMount() {
        axios.get(baseUrl)
            .then((res) => {
                const firstTwoReviews = res.data.data.slice(0, 2);
                // const apiReviews = res.data.data || [];
                const initialReview = {
                    id: 0,
                    first_name: 'Тимур',
                    last_name: 'Инамходжаев',
                    email: 'inamkhojayev@icloud.com',
                    age: 19,
                    content: "Очень хорошее качество костюмов. Вежливые консультанты, подберут отличный классический или Casual образ под ваш стиль и мероприятие",
                    rating: 5,
                };

                const updatedApiReviews = firstTwoReviews.map(review => ({
                    ...review,
                    rating: 5
                }));

                const mergedReviews = [initialReview, ...updatedApiReviews];

                this.setState({ reviews: mergedReviews });
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
            });
    }


    renderReviews() {
        if (this.state.reviews.length > 0) {
            return (
                <div>
                    <div className="container">
                        {this.state.reviews.map(el => (
                            <Review key={el.id} review={el} />
                        ))}
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    <div className="container">
                        <h3>Отзывов пока нет! Оставьте свой первый отзыв здесь.</h3>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.renderReviews()}
                <aside><AddReview onAdd={this.addReview} resetForm={this.resetForm}/><Footer /></aside>
            </div>
        );
    }


    addReview(review) {
        const id = this.state.reviews.length + 1
        this.setState({ reviews: [...this.state.reviews, { id, ...review }] });
    }
}

export default Reviews