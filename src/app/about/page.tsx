import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Our Makeup Brand</h1>
      <div className="content">
        <div className="video-container">
          <video controls>
            <source src="/beauty.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container">
          <p>At Lama, we believe that beauty is not just about looking good, 
            but feeling confident and empowered. Our commitment to enhancing natural 
            beauty drives us to create high-quality makeup products that cater to all
             skin types and tones. We understand the importance of sustainability, which is why 
             we carefully source our ingredients and materials, ensuring they are ethically 
             produced and environmentally friendly. Our mission extends beyond the product; 
             we strive to educate our customers about responsible beauty choices and promote a 
             culture of inclusivity and self-expression. Together, we can redefine beauty 
             standards and inspire individuals to embrace their unique selves.
            </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}

export default About;
