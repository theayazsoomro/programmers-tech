import React from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Course {id}</h2>
      <p>Course content will be displayed here.</p>
    </div>
  );
};

export default Course;
