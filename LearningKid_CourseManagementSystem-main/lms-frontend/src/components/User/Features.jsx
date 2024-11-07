import React from 'react';
import './Features.css';
import mainthumb1 from "../../assets/images/c1.jpg"; // Update image paths as needed
import mainthumb2 from "../../assets/images/c2.jpg"; // Placeholder image
import mainthumb3 from "../../assets/images/c3.jpg";
import mainthumb4 from "../../assets/images/c4.jpg";
import mainthumb5 from "../../assets/images/c5.jpg";
import mainthumb6 from "../../assets/images/c6.jpeg";
import mainthumb7 from "../../assets/images/c7.jpg";


const Features = () => {
  const courses = [
    {
      id: 1,
      title: "Financial Security Thinking and Principles Theory",
      description: "Learn the essentials of financial security and principles.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb1,
      price: "FREE",
      reviews: "(21 Reviews)",
    },
    {
      id: 2,
      title: "Professional Ceramic Moulding for Beginners",
      description: "Get hands-on with ceramic molding basics for beginners.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb2,
      price: "$50.00",
      reviews: "(21 Reviews)",
    },
    {
      id: 3,
      title: "Basic Fundamentals of Interior & Graphics Design",
      description: "Explore the basics of interior and graphic design.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb3,
      price: "FREE",
      reviews: "(21 Reviews)",
    },
    {
      id: 1,
      title: "Financial Security Thinking and Principles Theory",
      description: "Learn the essentials of financial security and principles.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb4,
      price: "FREE",
      reviews: "(21 Reviews)",
    },
    {
      id: 2,
      title: "Professional Ceramic Moulding for Beginners",
      description: "Get hands-on with ceramic molding basics for beginners.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb5,
      price: "$50.00",
      reviews: "(21 Reviews)",
    },
    {
      id: 1,
      title: "Financial Security Thinking and Principles Theory",
      description: "Learn the essentials of financial security and principles.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb6,
      price: "FREE",
      reviews: "(21 Reviews)",
    },
    {
      id: 2,
      title: "Professional Ceramic Moulding for Beginners",
      description: "Get hands-on with ceramic molding basics for beginners.",
      students: 25,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb7,
      price: "$50.00",
      reviews: "(21 Reviews)",
    },
    // Add more courses as needed
  ];

  return (
    <div className="features-container">
      <h2 className="heading-with-lines">Most Popular Courses</h2>
      <div className="courses-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-price">{course.price}</div>
            <div className="course-rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <span className="reviews-text">{course.reviews}</span>
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p><span role="img" aria-label="students">👥</span> {course.students} Students</p>
            <p><span role="img" aria-label="lessons">📚</span> {course.lessons} Lessons</p>
            <p><span role="img" aria-label="duration">⏱️</span> {course.duration}</p>
            <button className="learn-button">Learn</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
