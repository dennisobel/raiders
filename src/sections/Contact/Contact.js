import React, { Component } from "react";
import "./Contact.css";

import { PageTitle } from "../../components";
import { contactContent } from "../../constants";

import axios from "axios";

const API_PATH = "https://www.example.com/api/phpmailer/submit.php";

class Contact extends Component {
  constructor(props) {
    super(props);

    // Initialize component state
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  // Handle form submission
  handleSubmitForm = (e) => {
    e.preventDefault();

    // Update submit button text
    const submitBtn = document.querySelector("#submit");
    submitBtn.innerText = "please wait";

    if (!this.isFormValid()) {
      this.setState({ formError: true });
      submitBtn.innerText = "send message";
      return;
    }

    // Reset mailSent state
    this.setState({
      mailSent: false,
    });

    // Create form data
    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("subject", this.state.subject);
    formData.append("message", this.state.message);

    // Send form data via axios post request
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((result) => {
        // Update mailSent state and reset form fields
        this.setState({
          mailSent: result.data.sent,
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset submit button text
        submitBtn.innerText = "submit";
      })

      .catch((error) => this.setState({ error: error.message }));

    // Reset form error state
    this.setState({ formError: false });
  };

  // Form validation
  isFormValid = () => {
    const { name, email, subject, message } = this.state;
    return name !== "" && email !== "" && subject !== "" && message !== "";
  };

  render() {
    return (
      <>
        {/* Page Title */}
        <PageTitle title={"contact"} page={"contact"} />

        {/* Contact Section */}
        <section className="contact" id="contact">
          {/* Contact Information */}
          <div className="contact-info">
            {
              // Map over the contactContent array to render each contact information item
              contactContent.map((contact) => {
                let details = contact.content;
                return (
                  <div className="info-item" key={contact.id}>
                    <div className="icon">{contact.icon}</div>{" "}
                    {/* Contact Info icon */}
                    <div className="content">
                      <h3>{contact.title}</h3> {/* Contact Info title */}
                      {/* Map over the details array to display each item */}
                      {details.map((value, index) => {
                        return (
                          <p key={index}>{value}</p>
                        ); /* Contact Info Text */
                      })}
                    </div>
                  </div>
                );
              })
            }
          </div>

          {/* Contact Form */}
          <div className="contact-container">
            <form
              action="https://formsubmit.co/awasirovers@gmail.com"
              method="post"
              className="contact-form"
              id="contactUs-Form"
            >
              <h3>get in touch</h3>
              {/* Form Inputs */}
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  className="box"
                  id="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="name"
                  required
                />{" "}
                {/* Name Input Field */}
                <input
                  type="email"
                  name="email"
                  className="box"
                  id="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="email"
                  required
                />{" "}
                {/* Email Input Field */}
              </div>
              <input
                type="text"
                name="subject"
                className="box"
                id="subject"
                value={this.state.subject}
                onChange={(e) => this.setState({ subject: e.target.value })}
                placeholder="subject"
              />{" "}
              {/* Subject Input Field */}
              <textarea
                cols="30"
                rows="10"
                name="comment"
                id="comment"
                className="box"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                placeholder="message"
              ></textarea>{" "}
              {/* Textarea for message */}
              <div className="msg-alert">
                {/* Submit Button */}
                <button type="submit" name="submit" id="submit" className="btn">
                  Submit
                </button>

                {/* Display form error alert */}
                {this.state.formError && (
                  <span className="alert">
                    Please fill in all fields.
                  </span> /* Alert for form errors */
                )}

                {/* Mail Sent Alert */}
                {
                  this.state.mailSent && (
                    <span className="alert">Message sent successfully</span>
                  ) /* Alert for successful message sent */
                }
              </div>
            </form>
          </div>

          {/* Google Maps */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6303368191!2d66.59494515823903!3d25.193389461148573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1645287442276!5m2!1sen!2s" 
            allowFullScreen loading="lazy"></iframe> */}


<div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Awasi,%20Kisumu+(Awasi%20Rovers%20Academy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe></div>
        </section>
      </>
    );
  }
}

export default Contact;
