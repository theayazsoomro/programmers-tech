import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseCard = ({ image, title, category, price, teacher, teacherImage, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }
    return stars;
  };

  return (
    <Card className="my-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {category}
        </Card.Text>
        <Card.Text>
          <strong>Instructor:</strong> 
          {/* <div className="d-flex align-items-center"> */}
            <img src={teacherImage} alt={teacher} className="rounded-circle me-2 ms-2" style={{ width: '30px', height: '30px' }} />
            {teacher}
          {/* </div> */}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${price}
        </Card.Text>
        <div className="mb-2">
          {renderStars()}
        </div>
        <Button variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
