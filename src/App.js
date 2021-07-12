import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import "./sass/base.sass";
import Header from "./components/Header/Header";
import MainPages from "./components/MainPages";
import Course from "./components/Course/Course";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Add from "./components/News/Add/Add";
import SignUp from "./components/Sign/SignUp/SignUp";
import Sign from "./components/Sign/Sign";
import FullCard from "./components/News/FullCard/FullCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPages} />
          {/* <Route exact path="/Course" component={Course} /> */}
          <Route exact path="/News" component={News} />
          <Route exact path="/News/Add" component={Add} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/News/:id" component={FullCard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/sign" component={Sign} />
          <Route exact path="/Course" component={Course} />
          
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
