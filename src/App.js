import Header from "./components/header.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Home from './components/pages/home'
import About from './components/pages/about';
import Sculpture from "./components/pages/sculpture.js";
import Illustration from "./components/pages/illustration.js";
import Tattoo from "./components/pages/tattoo.js";
import News from "./components/pages/news.js";
import Contact from "./components/pages/contact.js";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Caveat',
      'cursive',
    ].join(','),
  },});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sculpture" component={Sculpture} />
          <Route path="/illustration" component={Illustration} />
          <Route path="/tattoo" component={Tattoo} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
