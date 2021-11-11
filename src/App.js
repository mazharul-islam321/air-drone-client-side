import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Dashboard from "./pages/DashboardPage/Dashboard/Dashboard";
import ExploreProduct from "./pages/ExploreProduct/ExploreProduct/ExploreProduct";
import PlaceOrder from "./pages/HomePage/PlaceOrderPage/PlaceOrder/PlaceOrder";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/explore">
                        <ExploreProduct></ExploreProduct>
                    </Route>
                    <Route path="/placeorder/:id">
                        <PlaceOrder></PlaceOrder>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard></Dashboard>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
