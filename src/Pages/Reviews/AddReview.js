import React from 'react'
import Rating from './Rating'
import Reviews from './Reviews';

export class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firs_tname: '',
            last_name: '',
            email: '',
            age: 0,
            content: '',
            rating: 0,
            errors: {
                first_name: false,
                last_name: false,
                email: false,
                age: false,
            },
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            errors: { ...this.state.errors, [name]: !value },
        });
    };

    

    handleSubmit = () => {
        const { first_name, last_name, email, age, content } = this.state;
        const errors = {
            first_name: !first_name,
            last_name: !last_name,
            email: !email,
            age: !age,
        };
        if (!Object.values(errors).some((error) => error)) {
            this.props.onAdd({
                first_name,
                last_name,
                email,
                age,
                content,
                rating: this.state.rating,
            });
    
        } else {
            this.setState({ errors });
        }
    };

    render() {
        const { errors } = this.state;

        return (
            <div className='review-form'>
                <form>
                    <input
                        placeholder='Имя'
                        name='first_name'
                        onChange={this.handleInputChange}
                        className={errors.first_name ? 'error' : ''}
                    ></input>
                    <input
                        placeholder='Фамилия'
                        name='last_name'
                        onChange={this.handleInputChange}
                        className={errors.last_name ? 'error' : ''}
                    ></input>
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        onChange={this.handleInputChange}
                        className={errors.email ? 'error' : ''}
                    ></input>
                    <input
                        type='number'
                        placeholder='Возраст'
                        name='age'
                        onChange={this.handleInputChange}
                        className={errors.age ? 'error' : ''}
                    ></input>
                    <textarea
                        placeholder='Ваш отзыв'
                        onChange={(e) => this.setState({ content: e.target.value })}
                    ></textarea>
                    <Rating setRating={(value) => this.setState({ rating: value })} />
                    <button type='button' onClick={this.handleSubmit}>
                        Оставить отзыв
                    </button>
                </form>
            </div>
        );
    }
}

export default AddReview;