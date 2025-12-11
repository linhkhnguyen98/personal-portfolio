import React, { useState } from 'react'
import './contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "431eee9b-19f0-4401-9d0b-4c41a08b2b81");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };

    return (
        <section className="contact-container">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Company Name</label>
                    <input type="text" className="field" placeholder="Please Enter Your Company Name" name="company name" require />
                </div>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Please Enter Your Full Name" name="full name" require />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="text" className="field" placeholder="Please Enter Your Email Address" name="email" require />
                </div>
                <div className="input-box">
                    <label>Message</label>
                    <textarea id="" name="message" className="field mess" placeholder="Please Enter Your Message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contact