/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./home.component.css";

export const HomeComponent: React.FC = () => {
  return (
    <main id="crimson-font">
      <section>
        <div className="jumbotron">
          <h1 className="display-4">Hello world! I am Michel.</h1>
          <p className="lead">
            A software developer adept at building full-stack applications.
          </p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/about" role="button">
              Learn more
            </a>
          </p>

          <section>
            <a href="https://github.com/michelXCVI">
              <img
                alt="github account"
                id="github"
                src={require("../../../images/github-1.svg")}
              />
            </a>

            <a href="https://www.linkedin.com/in/michel-charles-999998a3">
              <img
                alt="linkedIn account"
                id="linkedIn"
                src={require("../../../images/linkedin.svg")}
              />
            </a>

            <a href="mailto:mcharl05@nyit.edu">
              <img
                alt="gmail account"
                id="gmail"
                src={require("../../../images/gmail-icon.svg")}
              />
            </a>
          </section>
        </div>
      </section>

      <section>
        <h4> Skills</h4>
        <div>
          <div className="card" id="media-wrapper">
            <img
              id="aws"
              alt="aws logo"
              src={require("../../../images/aws-2.svg")}
            />
            <div className="card-body">
              <p className="card-text">AWS</p>
            </div>
          </div>


          <div className="card" id="media-wrapper">
            <img
              id="css"
              alt="css logo"
              src={require("../../../images/css-5.svg")}
            />
            <div className="card-body">
              <p className="card-text">CSS</p>
            </div>
          </div>

       

          <div className="card" id="media-wrapper">
            <img
              id="html"
              alt="hmtl logo"
              src={require("../../../images/html-5.svg")}
            />
            <div className="card-body">
              <p className="card-text">HTML</p>
            </div>
          </div>
          <div className="card" id="media-wrapper">
            <img
              id="js"
              alt="js logo"
              src={require("../../../images/javascript.svg")}
            />
            <div className="card-body">
              <p className="card-text">JavaScript</p>
            </div>
          </div>


          <div className="card" id="media-wrapper">
            <img
              id="json"
              alt="json logo"
              src={require("../../../images/json.svg")}
            />
            <div className="card-body">
              <p className="card-text">JSON</p>
            </div>
          </div>


          <div className="card" id="media-wrapper">
            <img
              id="node"
              alt="node logo"
              src={require("../../../images/Node.js_logo.svg")}
            />
            <div className="card-body">
              <p className="card-text">NodeJs</p>
            </div>
          </div>

          <div className="card" id="media-wrapper">
            <img
              id="post"
              alt="postgreSQL"
              src={require("../../../images/postgresql.svg")}
            />
            <div className="card-body">
              <p className="card-text">SQL</p>
            </div>
          </div>
          <div className="card" id="media-wrapper">
            <img
              id="react"
              alt="react logo"
              src={require("../../../images/react.svg")}
            />
            <div className="card-body">
              <p className="card-text">React</p>
            </div>
          </div>

          <div className="card" id="media-wrapper">
            <img
              id="ts"
              alt="ts logo"
              src={require("../../../images/typescript.svg")}
            />
            <div className="card-body">
              <p className="card-text">TypeScript</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
