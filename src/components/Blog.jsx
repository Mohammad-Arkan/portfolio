import React from "react";
import reactjs from "../assets/Reactjs.png";
import github from "../assets/GitHub-code-search_banner.jpg";
import nextjs from "../assets/Nextjs.png";
import {sectionTitle} from "../utilities/utils";

const Blog = () => {
  return (
    <>
      <div id="blogs" className="pt-5">
        {sectionTitle("My Blogs")}
        <div className="flex flex-wrap mt-14 justify-center gap-10 mx-5 lg:mx-10">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img src={github} alt="github" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Github Code Search!</h2>
              <p>
                Today, we are rolling out a technology preview for substantial
                improvements to searching code on GitHub. We want to ...
              </p>
              <div className="card-actions">
                <button className="btn btn-primary bg-gradient-to-r from-blue-400 to-blue-500 btn-sm border-none">Read Blog</button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img src={reactjs} alt="reacjs" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Learn ReactJS Today</h2>
              <p>
                React apps are made out of components. A component is a piece of
                the UI (user interface) that ...
              </p>
              <div className="card-actions">
                <button className="btn btn-primary bg-gradient-to-r from-blue-400 to-blue-500 btn-sm border-none">Read Blog</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
