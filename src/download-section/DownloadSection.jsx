import React from 'react';
import './download-section.css';
import appImg from '../images/app.png';

const DownloadSection = () => {
  return (
    <section className='dow'>
   <div className="container">
     <div className='app_container'>

        <div className="row">
            <div className="col-lg-6 col-md-6">
             <div className="app_img">
                <img src={appImg} alt="" />
             </div>
            </div>
            <div className="col-lg-6 col-md-6">
             <div className="app_content">
                <h5>Download Our App</h5>
                <h2 className='mb-4'>Never Fell Hungry! Download Our Mobile App Order Delicius </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi repellat <br></br> quis distinctio perferendis consectetur voluptas ipsa sint cum eius!</p>
                <div className="app_btns d-flex align-items-center gap-5 mt-4">
                    <button className="btn_apple d-flex align-items-center gap-3">
                    <i class="fa-brands fa-apple"></i>  <a href="" >App Store </a>
                    </button>
                    <button className="btn_google d-flex align-items-center gap-3">
                    <i class="fa-brands fa-google-play"></i> <a href="" >Google Play</a>
                    </button>
                </div>
             </div>
            </div>
        </div>
    </div>
   </div>
   </section>
  )
}

export default DownloadSection