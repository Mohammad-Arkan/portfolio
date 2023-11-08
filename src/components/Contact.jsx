import  {useRef} from "react";
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
    <div  id="contact" className=" w-8/12 mx-auto bg-transparent bg-gray-100 dark:bg-gray-800">
    <div className="w-8/12 flex">
        {/* <Lottie animationData={animation}></Lottie> */}
    </div>
<div className="min-h-screen w-full py-6 flex flex-col justify-center sm:py-12">
        <div className="relative w-5/6 py-3 mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className=" mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold dark:text-gray-700">Contact me!</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                    {/* onSubmit={handleSubmit(onSubmit)} */}
                        <form  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 w-full">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" name="password" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>

                            {/* <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>


                                <div className="relative">
                                    <input type= "password"
                                        name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                                    <label className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                      
                                    </label>
                                </div>
                            </div> */}
                            <div className="relative">
                              <input type="submit" value="Submit" className=" bg-gradient-to-r from-blue-400 to-blue-500  h-11 text-white rounded-md px-2 py-2 w-full disabled:bg-blue-400"/>
                                {/* <button type="submit" className="bg-blue-500 h-11 text-white rounded-md px-2 py-2 w-full disabled:bg-blue-400"> </button> */}
                            </div>
                        </form >

                        

                   


                    </div>

                  
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Contact;
