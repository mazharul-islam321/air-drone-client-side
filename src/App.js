import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
