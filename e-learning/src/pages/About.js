import React from 'react';

const About = () => {
  return (
    <div className="container about-us mt-5">
     <div className="py-5 service-32">
        <div className="container">
            <div className="row wrap-feature-32"> 
                <div className="col-md-6"> <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature32/img1.jpg" className="img-fluid" width="100%" alt='img' /> </div>
                <div className="col-md-6 align-self-center"> 
                    <span className="badge badge-info rounded-pill px-3 py-1 font-weight-light">About us</span>
                    <h3 className="my-3">Welcome to our E-Learning Platform</h3>
                    <p className="mt-3">We provide a comprehensive range of online courses and educational resources to help you enhance your skills and knowledge. Our platform offers a seamless learning experience with high-quality content and interactive features.</p> 
                    <a className="btn btn-info-gradiant btn-md rounded-pill mt-3" href="#f32"><span>View Details</span></a> 
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default About;