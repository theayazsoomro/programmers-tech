const Course = require('../models/course.model');

exports.createCourse = async (req, res) => {
  const { title, description, category, price, lessons, duration, rating, instructor, imgSrc } = req.body;
  try {
    const newCourse = new Course({
      title,
      description,
      category,
      price,
      lessons,
      duration,
      rating,
      instructor,
      imgSrc,
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
