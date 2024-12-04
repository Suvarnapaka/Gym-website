import React, {useRef} from 'react'
import "./Join.css";
import emailjs from "@emailjs/browser"


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_0j9lfx5', 'template_o2a88zk', form.current, {
            publicKey: 'oISb7OsEgTXGVG_nD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
        <hr/>
        <div>
            <span className="stroke-text">READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className="stroke-text">WITH US?</span>
        </div>
    </div>
        <div className="right-j">
            <form useRef={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user-email" placeholder="Enter Your Email"/>
                <btn className="btn btn-j">Join Now</btn>
            </form>
        </div>

    </div>
  )
}

export default Join;
