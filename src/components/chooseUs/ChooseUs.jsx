import React from 'react';
import './chooseUs.css';
import pastaImg from '../../images/pasta.png';

const ChooseUs = () => {
  return (
    <section className='choose '>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
             <img src={pastaImg} alt="" />
                </div>
                <div className="col-lg-6">
             <div className="choose_content">
                <h4>Who Are You?</h4>
                <h2>Take a look at the benefits we offer you</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ipsum consectetur ipsa voluptates adipisci veritatis!</p>
                <div className="features ">
                    <div className="feature1 d-flex align-items-center justify-content-between">

                        <div className="single_feature col-6">
                            <span><i class="fa-solid fa-truck"></i></span>
                            <h6>Free Home Delivery</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="single_feature col-6">
                            <span className='feature-icon-two'>
                        <i class="fa-solid fa-dollar-sign"></i>
                        </span>
                            <h6>Return $ Rdfund</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="single_feature col-6 three">
                            <span className='feature-icon-3'>
                            <i class="fa-brands fa-cc-apple-pay"></i>

                                </span>
                            <h6>Pay From Here</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="single_feature col-6 ">
                            <span className='feature-icon-four'>
                        <i class="fa-solid fa-clock"></i>
                        </span>
                            <h6>24 Hours Supports</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
             </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ChooseUs