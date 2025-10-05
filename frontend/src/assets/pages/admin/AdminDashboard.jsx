import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidbar from "../../components/admin/AdminSidbar";
import FeedbackTable from "../../components/admin/FeedbackTable";
import Requests from "../../components/admin/Requests";
import Viewuser from "../../components/admin/Viewuser";
import ViewProperties from "../../components/admin/ViewProperties";
import Hero from "../../components/admin/Hero";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <AdminSidbar />
      <div id="home" className="absolute md:left-80 md:top-30 left-20 top-20 w-[70%] scroll-mt-24 pb-10">
        <Hero/>
        <div id="request" className="scroll-mt-24">
          <Requests />
        </div>

        <div id="users" className="scroll-mt-24">
          <Viewuser />
        </div>

        <div id="property" className="scroll-mt-24">
          <ViewProperties />
        </div>

        <div id="feedback" className="scroll-mt-24">
          <FeedbackTable />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
