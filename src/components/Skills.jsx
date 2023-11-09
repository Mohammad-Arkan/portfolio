
import {VscVerifiedFilled} from "react-icons/vsc";
import {sectionTitle} from "../utilities/utils";

const Skills = () => {
  return (
    <>
      <div id="skills">
        {sectionTitle("My background")}
        <div className="flex flex-wrap mt-[4.5rem] justify-center gap-10 lg:gap-20 pb-10">
          <div
            data-aos="fade-down-right"
            className="card card-compact w-[28rem] mx-3 lg:pm-0 py-5 border-2 bg-base-100 shadow-xl">
            <div className="card-body gap-5">
              <h2 className="card-title justify-center text-2xl">
                Development
              </h2>
              <div className="flex gap-20 justify-center">
                <div className="flex flex-col gap-2 font-semibold text-xl">
                  {/* <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> HTML, CSS
                  </span> */}
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> JavaScript
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> React.js
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> MongoDB
                  </span>
                </div>
                <div className="flex flex-col gap-2 font-semibold text-xl">
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Node.js
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Express.js
                  </span>
                  {/* <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> MongoDB
                  </span> */}
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> WordPress
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            className="card card-compact w-[28rem] mx-3 lg:mx-0 py-5 border-2 bg-base-100 shadow-xl">
            <div className="card-body gap-5">
              <h2 className="card-title justify-center text-2xl">
                Tools & Deploy
              </h2>
              <div className="flex gap-20 justify-center">
                <div className="flex flex-col gap-2 font-semibold text-xl">
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Git & Github
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Bootstrap
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Tailwindcss
                  </span>
                  {/* <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Daisyui
                  </span> */}
                </div>
                <div className="flex flex-col gap-2 font-semibold text-xl">
                {/* <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled />VS code
                  </span> */}
                <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Firebase
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Vercel
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <VscVerifiedFilled /> Netlify
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
