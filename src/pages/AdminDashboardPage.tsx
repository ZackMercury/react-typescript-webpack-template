import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Items from "../components/items/Items";

export default function AdminDashboardPage () {
    useEffect(() => {
        document.title = "Admin Dashboard";
    }, []);

    return <div className="AdminDashboardPage">
        <Items perPage={6} pagination={true} adminFeatures={true} /><br/>
        <Link to="/manageusers"><button type="button" className="btn btn-primary">Manage users</button></Link>
    </div>
}