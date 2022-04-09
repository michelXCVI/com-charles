import React from "react";
import "./about.component.css";

export const AboutComponent: React.FC = () => {
  return (
    <main id="crimson-font">
      <section>
        <h1>About Me</h1>
        <p id="p1">
          I am a software developer with experience in building full-stack
          applications. Developed an API using Express, Nodejs, Typescript.
          Worked with front-end technologies such as React, Bootstrap, Material
          UI. Implemented React-Redux to facilitate a consistent approach to
          application states. Used Axios which allows front-end environments to
          send HTTP requests to servers. Experienced in using SQL which helps
          define database tables' structures and constraints.
        </p>
        <ul>
          <li>
            Experienced with <strong>SQL, HTML, CSS.</strong>
          </li>
          <li>
            Developed back-end and front-end using <strong>TypeScript</strong>.
          </li>
          <li>
            Experienced with using <strong>NodeJs</strong> and{" "}
            <strong>Express</strong> for API design.
          </li>
          <li>
            Wrote various <strong>SQL</strong> queries for specific data.
          </li>
          <li>
            Constructed endpoints to query <strong>PostgreSQL</strong> databases
            designed for server-side applications.
          </li>
          <li>
            Used <strong>Spring</strong> Framework functionalities to develop
            web applications in a <strong>Java</strong> Environment.
          </li>
          <li>
            Facilitated communication with web servers using{" "}
            <strong>Hibernate</strong>.
          </li>
          <li>
            Utilized <strong>Axios</strong> in client-side applications to send
            HTTP requests to servers.
          </li>
          <li>
            Designed modern and responsive web applications with{" "}
            <strong>React</strong>.
          </li>
          <li>
            Implemented <strong>React-redux</strong> to facilitate consistent
            behaviors on web applications.
          </li>
          <li>
            Tested codebase using <strong>Jest</strong> which provides a focus
            on simplicity.
          </li>
          <li>
            Used <strong>Jenkins</strong> and <strong>EC2</strong> to automate
            and deploy applications.
          </li>
        </ul>
      </section>

      <section>
        <h3>Education</h3>

        <div className="card" id="edu-wrapper">
          <img
            id="nyit"
            alt="nyit logo"
            src={require("../../../images/NYIT.png")}
          />
          <div className="card-body">
            <p id="edu-text" className="card-text">
              <strong>Bachelor of Science Degree in Computer Science</strong>
              <br />
              September 2014 - May 2019
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>Experience</h3>
        <div className="card" id="job-wrapper">
          <img
            id="revature"
            alt="revature logo"
            src={require("../../../images/revature.png")}
          />
          <div className="card-body">
            <p id="edu-text" className="card-text">
              <strong>Software Developer</strong>
              <br />
              April 2020 - Present
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
