import CourseCard from './CourseCard';

import courseImage from '../../assets/images/mathematics.jpg';
import authorImage from '../../assets/images/author-01.png';
import courseImage2 from '../../assets/images/science.jpg';
import authorImage2 from '../../assets/images/author-02.png';
import courseImage3 from '../../assets/images/english_lang.jpg';
import courseImage4 from '../../assets/images/Sinhala_lang.PNG';
import courseImage5 from '../../assets/images/history.jpg';
import courseImage6 from '../../assets/images/geography.jpg';
import courseImage7 from '../../assets/images/business.jpg';
import courseImage8 from '../../assets/images/buddhism.jpg';
import courseImage9 from '../../assets/images/it.jpg';
import courseImage10 from '../../assets/images/agriculture.jpg';
import courseImage11 from '../../assets/images/civics.jpg';
import './CourseCarousel.css'

const courses = [
  {
    title: 'Mathematics',
    description: 'Gain essential mathematical skills needed for academic and daily life applications.',
    image: courseImage,
    authorImage: authorImage,
    authorName: 'Math Department',
    isFree: true,
  },
  {
    title: 'Science',
    description: 'Explore fundamental concepts in Physics, Chemistry, and Biology.',
    image: courseImage2,
    authorImage: authorImage2,
    authorName: 'Science Department',
    isFree: true,
  },
  {
    title: 'English Language',
    description: 'Develop your proficiency in reading, writing, and speaking English.',
    image: courseImage3,
    authorImage: authorImage,
    authorName: 'English Department',
    isFree: true,
  },
  {
    title: 'Sinhala Language',
    description: 'Enhance your skills in Sinhala grammar, vocabulary, and comprehension.',
    image: courseImage4,
    authorImage: authorImage2,
    authorName: 'Sinhala Department',
    isFree: true,
  },
  {
    title: 'History',
    description: 'Understand the key historical events and developments that shaped the world.',
    image: courseImage5,
    authorImage: authorImage,
    authorName: 'History Department',
    isFree: true,
  },
  {
    title: 'Geography',
    description: 'Study the physical features of the Earth and human geography.',
    image: courseImage6,
    authorImage: authorImage,
    authorName: 'Geography Department',
    isFree: true,
  },
  {
    title: 'Business',
    description: 'Learn business principles and management skills.',
    image: courseImage7,
    authorImage: authorImage,
    authorName: 'Business Department',
    isFree: true,
  },
  {
    title: 'Buddhism',
    description: 'Learn the teachings and practices of Buddhism.',
    image: courseImage8,
    authorImage: authorImage2,
    authorName: 'Buddhism Department',
    isFree: true,
  },
  {
    title: 'Information Technology',
    description: 'Study essential IT concepts and skills.',
    image: courseImage9,
    authorImage: authorImage,
    authorName: 'IT Department',
    isFree: true,
  },
  {
    title: 'Agriculture',
    description: 'Learn the basics of farming and agriculture.',
    image: courseImage10,
    authorImage: authorImage2,
    authorName: 'Agriculture Department',
    isFree: true,
  },
  {
    title: 'Civics',
    description: 'Learn about your rights, duties, and responsibilities as a citizen.',
    image: courseImage11,
    authorImage: authorImage,
    authorName: 'Civics Department',
    isFree: true,
  },
];

const CourseCarousel = () => {
  return (
    <section className="section courses" data-section="section4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choose Your O/L Course</h2>
            </div>
          </div>
          <div className="owl-carousel owl-theme">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
