import React from 'react';

const Footer = () => {
    return (
        <div className='footer py-4 mt-5'>
            <div className="container px-5 d-flex justify-content-between">
               
               <a href="https://egecanyildirim.com/" className=' text-white btn' > 
               <h4>Egecan Yıldırım</h4>
               </a>
               <div > 
               <a href="https://github.com/egecanyldrm" className=' text-white btn' ><h5>Github</h5></a>
               <a href="https://www.linkedin.com/in/egecan-yildirim/" className=' text-white btn' ><h5>Linkedin</h5></a>
               </div>
            </div>
        </div>
    )
};

export default Footer;
