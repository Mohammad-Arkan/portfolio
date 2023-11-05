
import {sectionTitle} from "../utilities/utils";
import img from "../assets/profile.png";
import {BiLogoGmail} from "react-icons/bi";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <>
      <div id="about" className="pt-5">
        {sectionTitle("About Me")}
        <div
          data-aos="zoom-out-right"
          className="lg:flex pt-14 justify-center space-x-10 lg:pb-5">
          <div className="flex justify-center">
            <img width={333} className="rounded-lg" src={img} alt="profile" />
          </div>
          <div
            data-aos="zoom-out-left"
            className="lg:flex flex-col justify-center space-y-5 lg:w-1/2">
            <h3 className="text-3xl font-semibold mt-5 lg:mt-0">
              I&apos;m Md.Arkan
            </h3>
            {/* <p>
              A Full Stack Web Developer. Specialist In MERN Stack. My Weapons
              are HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs, MongoDB,
              and Firebase.
            </p> */}
            <p>A passionate and experienced Marn-Stack Developer with a strong background in creating dynamic and responsive web applications. I thrive in the fast-paced world of technology and love to take on new challenges that push the boundaries of what&apos;s possible.</p>
            <p>
              <span className="font-semibold">Email: </span>
              a.r.khan.coxyboys@gmail.com
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                to={"https://mail.google.com/mail/u/0/#inbox"}
                className="btn btn-sm">
                <BiLogoGmail />
                Mail
              </Link>
              <Link
                to={"https://www.linkedin.com/in/dev-zihad"}
                className="btn btn-sm">
                <FaLinkedin />
                LinkedIn
              </Link>
              <Link to={"https://github.com/Mohammad-Arkan"} className="btn btn-sm">
                <FaGithub />
                Github
              </Link>
              <Link to={"https://web.whatsapp.com/"} className="btn btn-sm">
                <IoLogoWhatsapp />
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
