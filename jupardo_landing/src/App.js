import React from "react";

import { Link } from "react-scroll";

import "./App.css";

const App = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <Link
          className="navbar-brand cursor-pointer"
          to="banner"
          offset={-56}
          smooth={true}
        >
          jupardo
        </Link>
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <li className="nav-item">
              <Link
                className="nav-link active cursor-pointer"
                offset={-56}
                smooth={true}
                to="banner"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active cursor-pointer"
                offset={-56}
                smooth={true}
                to="skills"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active cursor-pointer"
                offset={-56}
                smooth={true}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                target="blank"
                href="https://jupardo.com/blog"
              >
                Blog
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <section id="banner" className="header p-3">
        <div className="row m-0 p-0">
          <div className="col-xl-4 col-12 align-middle align-self-center profile-photo">
            <img
              src="imagen_temporal.jpg"
              alt="foto de perfil"
              className="cover mx-auto d-block"
            />
          </div>
          <div className="col-xl-8 col-12 text-center align-middle align-self-center personal-info">
            <h2 className="nombre text-center mt-3">Julián David Pardo Díaz</h2>
            <h5 className="subtitle">- Full stack developer</h5>
            <h5 className="subtitle">
              Software engineering degree at Universidad de los Andes
            </h5>
            <ul className="list-inline social m-0">
              <li className="list-inline-item">
                <a
                  className="nav-link active"
                  href="https://www.facebook.com/julian.d.diaz.77/"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="nav-link active"
                  href="https://www.linkedin.com/in/juli%C3%A1n-david-pardo-d%C3%ADaz-a9a570144/"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="nav-link active"
                  href="https://www.instagram.com/julian.d.diaz.77/"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="nav-link active"
                  href="https://twitter.com/julipardodiaz"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="nav-link active"
                  href="https://github.com/jupardo"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="align-text-bottom bottom-text">
          <blockquote className="blockquote text-center align-text-bottom m-lg-3 d-block">
            <p className="mb-0">"Taking online classes's so fun"</p>
            <footer className="blockquote-footer">No one, ever</footer>
          </blockquote>
          <Link to="info" smooth={true} offset={-57} className="cursor-pointer">
            <p>
              <i className="arrow down"></i>
            </p>
          </Link>
        </div>
      </section>
      <section id="info" className="section-personal-info p-3">
        <p className="intro">
          Technology enthusiast. I love creating new things as I love singing.
          My lifetime won´t be enough to accomplish all of my dreams, but I work
          on those everyday. I’ve been working on many projects using tech as a
          fundamental tool in world’s transformation.
        </p>
        <div className="row m-0 p-0" id="projects">
          <div className="col-6 working row tiles">
            <div className="col-lg-12">
              <h4 className="text-center">Projects I'm working on</h4>
            </div>
            <div className="col-lg-6 col-12">
              <a href="https://github.com/BoolJS">
                <img src="booljs.png" alt="Bool js logo" />
                <p>Contributor</p>
              </a>
            </div>
            <div className="col-lg-6 col-12">
              <a href="https://podcastless.com/">
                <img src="podcastless.svg" alt="Podcastless logo" />
                <p>Speaker</p>
              </a>
            </div>
          </div>
          <div className="col-6 worked row tiles">
            <div class="row">
              <div className="col-lg-12">
                <h4 className="text-center">Projects I've worked on</h4>
              </div>
              <div className="col-12">
                <a href="https://poetri.io/">
                  <img src="poetri.png" alt="Poetri logo" />
                  <p>Full stack-developer</p>
                </a>
              </div>
              <div className="col-12">
                <a href="https://uniandes.edu.co/">
                  <img
                    src="logo-andes.svg"
                    alt="Logo universidad de los andes"
                    className="black"
                  />
                  <p>Engineer in training - T.A.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row videos" id="videos">
          <div className="card">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/Sh9N0AMdKCE"
              title="Mobile app development first proto"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="card-body">
              <h2 class="card-title">My skills</h2>
              <h5>Node.js</h5>
              <h5>React.js</h5>
              <h5>Flutter</h5>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        Contact me
        <div className="float-right">
          <ul className="list-inline social m-0">
            <li className="list-inline-item">
              <a
                className="nav-link active"
                href="https://www.facebook.com/julian.d.diaz.77/"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="nav-link active"
                href="https://www.linkedin.com/in/juli%C3%A1n-david-pardo-d%C3%ADaz-a9a570144/"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="nav-link active"
                href="https://www.instagram.com/julian.d.diaz.77/"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="nav-link active"
                href="https://twitter.com/julipardodiaz"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="nav-link active" href="https://github.com/jupardo">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
};

export default App;
