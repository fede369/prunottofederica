import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Pictures from "./pages/pictures/Pictures";
import Animations from "./pages/animations/Animations";
import Components from "./pages/components/Components";
import About from "./pages/about/About";
import WhereIAm from "./pages/whereiam/WhereIAm";
import Remikks from "./pages/projects/works/1Remikks";
import LangaExperience from "./pages/projects/works/2LangaExperience";
import PersonalWebsite from "./pages/projects/works/3PersonalWebsite";
import AffidoAnziani from "./pages/projects/works/4AffidoAnziani";
import DarkDreams from "./pages/projects/works/5DarkDreams";
import Mym from "./pages/projects/works/6Mym";
import Mise from "./pages/projects/works/7Mise";
import Consemi from "./pages/projects/works/8Consemi";
import Saccisica from "./pages/projects/works/9Saccisica";
import Posterhero from "./pages/projects/works/10Posterhero";
import DreamBoard from "./pages/projects/works/11DreamBoard";
import Album1 from "./pages/pictures/album/Album1";
import Album2 from "./pages/pictures/album/Album2";
import Album3 from "./pages/pictures/album/Album3";
import Album4 from "./pages/pictures/album/Album4";
import ScrollToTop from "./ScrollToTop";

import { Switch, Route } from "react-router-dom";

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/remikks" component={Remikks}></Route>
        <Route exact path="/langaexperince" component={LangaExperience}></Route>
        <Route
          exact
          path="/personalwebsite"
          component={PersonalWebsite}
        ></Route>
        <Route exact path="/affidoanziani" component={AffidoAnziani}></Route>
        <Route exact path="/darkdreams" component={DarkDreams}></Route>
        <Route exact path="/mym" component={Mym}></Route>
        <Route exact path="/mise" component={Mise}></Route>
        <Route exact path="/consemi" component={Consemi}></Route>
        <Route exact path="/saccisica" component={Saccisica}></Route>
        <Route exact path="/posterhero" component={Posterhero}></Route>
        <Route exact path="/dreamboard" component={DreamBoard}></Route>

        <Route exact path="/pictures" component={Pictures}></Route>
        <Route exact path="/album1" component={Album1}></Route>
        <Route exact path="/album2" component={Album2}></Route>
        <Route exact path="/album3" component={Album3}></Route>
        <Route exact path="/album4" component={Album4}></Route>
        <Route exact path="/animations" component={Animations}></Route>
        <Route exact path="/components" component={Components}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/whereiam" component={WhereIAm}></Route>
      </Switch>
    </ScrollToTop>
  );
}
