import React, { Fragment } from 'react';
import { NavbarComponent } from './navbar.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeComponent } from './pages/home.components/home.component';
import { AboutComponent } from './pages/about.components/about.component';
import { ResumeComponent } from './pages/resume.components/resume.component';



export const MainComponent: React.FC = () =>{
    return (
      <div>
        <BrowserRouter>
          <main>
            <Switch>
              <Fragment>
                <NavbarComponent />
                <Route exact path="/">
                  <HomeComponent />
                </Route>
                <Route path="/about">
                  <AboutComponent />
                </Route>
                <Route path="/resume">
                  <ResumeComponent />
                </Route>
              </Fragment>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
}