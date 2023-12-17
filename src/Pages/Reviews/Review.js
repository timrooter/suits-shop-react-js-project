import React from 'react'

export class Review extends React.Component {
  review = this.props.review;

  renderStars = () => {
    const stars = [];
    for (let i = 0; i < this.review.rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };
  render() {

    return (
      <div className='review' >
        <h3>{this.review.first_name} {this.review.last_name}, {this.review.age}</h3>
        <h4>{this.review.email}</h4>
        <p>{this.review.content}</p>
        <div>{this.renderStars()}</div> 
      </div>
    )
  }
}

export default Review