import React from "react";
import profileImg from "../../assets/images/SideberImg.jpg";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const closeMobileSidebar = () => {
    const closeBtn = document.querySelector("#mobileSidebar .btn-close");
    closeBtn?.click();
  };

  const links = [
    { to: "/Home", text: "HOME" },
    { to: "/About", text: "ABOUT" },
    { to: "/Skills", text: "SKILLS" },
    { to: "/Experience", text: "EXPERIENCE" },
    { to: "/Work", text: "WORK" },
  ];

  const renderLinks = (isMobile = false) =>
    links.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        className="nav-link text-uppercase"
        onClick={isMobile ? closeMobileSidebar : undefined}
      >
        {link.text}
      </NavLink>
    ));

  const sidebarContent = (isMobile = false) => (
    <aside className="sidebar text-center py-5 px-3 bg-transparent">
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
        {renderLinks(isMobile)}
      </nav>
    </aside>
  );

  return (
    <>
      <div className="d-none d-lg-block">{sidebarContent(false)}</div>

      <button
        className="btn btn-light position-fixed top-0 end-0 m-3 d-lg-none z-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <button
          type="button"
          className="btn-close d-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>

        <div className="offcanvas-body p-0">
          {sidebarContent(true)}
        </div>
      </div>
    </>
  );
};