import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import {sectionTitle} from "../utilities/utils";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const reset = e.target;
    Toast.fire({
      icon: "success",
      title: "Message Has Sent successfully",
    });

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_KEY}`,
        `${import.meta.env.VITE_TEMPLATE_KEY}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          reset.user_name.value = "";
          reset.user_email.value = "";
          reset.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="pt-5">
      {sectionTitle("Contact Me")}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="card mt-12 flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="zihaaad"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Email</span>
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="example@gmail.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Message</span>
            </label>
            <textarea
              name="message"
              placeholder="write your message"
              className="textarea textarea-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={"Send Message"}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
