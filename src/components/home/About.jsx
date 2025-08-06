import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>소개</h2>
        <div className="about-content">
          {/* <img src="your-profile-image.jpg" alt="프로필 사진" className="profile-pic" /> */}
          <div className="about-text">
            <p>

            </p>
            <p>
              OS : Windows, Linux <br/>
              언어 : C++, C#<br/>
              프레임워워크 : MFC, WPF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
