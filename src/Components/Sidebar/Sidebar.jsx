import React from "react";
import profileImg from "../../assets/images/SideberImg.jpg";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const sidebarContent = (
    <aside className="vh-100 text-center py-5 px-3">
      <img
        src={profileImg}
        alt="Jackson Ford"
        className="rounded-circle object-fit-cover mb-4"
        width="150"
        height="150"
      />

      <h2 className="fw-bold text-black mb-2 sidebar-title">Jackson Ford</h2>

      <p className="small text-uppercase mb-4 par">
        <span className="text-primary">UI/UX/DESIGNER</span>{" "}
        <span className="text-secondary">IN PHILIPPINES</span>
      </p>

      <nav className="nav flex-column align-items-center gap-2">
        <NavLink className="nav-link text-uppercase text-dark py-2" to="/Home" >HOME</NavLink>
        <NavLink className="nav-link text-uppercase text-dark py-2" to="/About" >ABOUT</NavLink>
        <NavLink className="nav-link text-uppercase text-dark py-2" to="/Skills" >SKILLS</NavLink>
        <NavLink className="nav-link text-uppercase text-dark py-2" to="/Experience" >EXPERIENCE</NavLink>
        <NavLink className="nav-link text-uppercase text-dark py-2" to="/Work" >WORK</NavLink>
      </nav>
    </aside>
  );

  return (
    <>
      <div className="d-none vh-100 d-lg-block bgcolor">
        {sidebarContent}
      </div>

      <button
        className="btn btn-outline-secondary position-fixed top-0 end-0 m-3 d-lg-none z-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close ms-auto bg-secondary"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body p-0">
          {sidebarContent}
        </div>
      </div>
    </>
  );
};