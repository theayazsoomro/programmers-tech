const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    const newCourse = new Course({
      title,
      description,
      instructor,
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
