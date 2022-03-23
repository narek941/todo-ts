import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a
        href="/"
        style={{
          fontSize: "32px",
          textDecoration: "none",
          padding: "10px",
          color: "lightblue",
        }}
      >
        Todo
      </a>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <NavLink
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              textDecoration: "none",
              color: "lightblue",
            }}
            to="/"
          >
            Todo List
          </NavLink>
        </li>
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <NavLink
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              textDecoration: "none",
              color: "lightblue",
            }}
            to="/"
          >
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
