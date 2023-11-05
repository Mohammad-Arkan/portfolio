import artOasis from "../assets/art-oasis.png";
import toyMarket from "../assets/toy-market.png";
import chefRecipe from "../assets/chef-recipe.png";
import {sectionTitle} from "../utilities/utils";
import {Link} from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="space-y-12 lg:space-y-20">
      {sectionTitle("My Projects")}
      <div className="hero">
        <div
          data-aos="zoom-in-right"
          className="hero-content gap-8 flex-col lg:flex-row">
          <div className="card card-compact w-96  shadow-xl">
            <figure>
              <img className="rounded-lg" src={artOasis} alt="Shoes" />
            </figure>
          </div>
          <div data-aos="zoom-in-left" className="lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold"> Art-Oasis</h1>
            <h2>
              <span className="font-semibold">Overview: </span> This is a MERN
              Stack Online Drawing Course Project where Users Can Authenticate,
              Buy Courses, Instructor Can Add & Manage Courses.
            </h2>
            <p>
              <span className="font-semibold">Technologies:</span>MongoDB,
              Expressjs, Reactjs, Axios, Tanstack Query, Nodejs, JWT
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={"https://art-oasis.web.app"}
                className="btn btn-sm btn-outline">
                Live Site
              </Link>
              <Link
                to={"https://github.com/zihaaad/art-oasis-client"}
                className="btn btn-sm btn-outline">
                Github Client
              </Link>
              <Link
                to={"https://github.com/zihaaad/art-oasis-server"}
                className="btn btn-sm btn-outline">
                Github Server
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div
          data-aos="zoom-in-left"
          className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <div className="card card-compact w-96 shadow-xl">
            <figure>
              <img className="rounded-lg" src={toyMarket} />
            </figure>
          </div>
          <div data-aos="zoom-in-right" className="lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold">Toy Marketplace</h1>
            <h2>
              <span className="font-semibold">Overview: </span> This is a MERN
              Stack Toy Marketplace Project where Users Can Authenticate, Add
              Their Toy, Manage Their Toys & See All Toys In Details that are
              Listed By All Users.
            </h2>
            <p>
              <span className="font-semibold">Technologies:</span> Reactjs,
              React Router, Firebase, Expressjs, MongoDB, Nodejs, JWT
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={"https://toy-marketplace-b3b8e.web.app/"}
                className="btn btn-sm btn-outline">
                Live Site
              </Link>
              <Link
                to={"https://github.com/zihaaad/toy-market-client"}
                className="btn btn-sm btn-outline">
                Github Client
              </Link>
              <Link
                to={"https://github.com/zihaaad/toy-market-server"}
                className="btn btn-sm btn-outline">
                Github Server
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div
          data-aos="zoom-in-right"
          className="hero-content gap-10 flex-col lg:flex-row">
          <div className="card card-compact w-96 shadow-xl">
            <figure>
              <img className="rounded-lg" src={chefRecipe} />
            </figure>
          </div>
          <div data-aos="zoom-in-left" className="lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold"> Chef Recipe</h1>
            <h2>
              <span className="font-semibold">Overview: </span> This is a
              Frontend Responsive Recipe Website Based On Turkish Recipe where
              Users Can Authenticate & View Recipes in Details
            </h2>
            <p>
              <span className="font-semibold">Technologies:</span> Reactjs,
              React Router, Firebase, Bootstrap, Expressjs, MongoDB, Nodejs
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={"https://chef-recipe-7a26f.web.app"}
                className="btn btn-sm btn-outline">
                Live Site
              </Link>
              <Link
                to={"https://github.com/zihaaad/chef-recipe-client"}
                className="btn btn-sm btn-outline">
                Github Client
              </Link>
              <Link
                to={"https://github.com/zihaaad/chef-recipe-server"}
                className="btn btn-sm btn-outline">
                Github Server
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
