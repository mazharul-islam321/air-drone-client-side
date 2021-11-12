import React from "react";
import { Col, Nav, Row, Button } from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddADrone from "../AddADrone/AddADrone";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import "./Dashboard.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();
    return (
        <div>
            <div className="bg-danger">
                <h1 className="text-center">DASHBOARD</h1>
            </div>
            <Row className="w-100">
                <Col xs={12} md={2}>
                    <div className="bg-light shadow">
                        <Nav>
                            <Nav.Link as={Link} to="/">
                                Home Page
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}`}>
                                Dashboard
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/pay`}>
                                Payment Method
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/myorders`}>
                                My Orders
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/review`}>
                                Add Review
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/manageorder`}>
                                Manage All Orders
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/addproduct`}>
                                Add A Drone
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/makeadmin`}>
                                Make Admin
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${url}/manageproduct`}>
                                Manage Product
                            </Nav.Link>
                            <Button onClick={logOut}>LogOut</Button>
                        </Nav>
                    </div>
                </Col>
                <Col xs={12} md={10}>
                    <Switch>
                        <Route exact path={path}>
                            <div className="dash-board">
                                <h3>Welcome to Dashboard</h3>
                            </div>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/manageorder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddADrone></AddADrone>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageproduct`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
