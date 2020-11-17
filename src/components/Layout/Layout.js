import React from "react";
import classes from "./layout.module.css";

const Layout = (props) => (
  <>
    <div className={classes.Navigation}> sidebar, and things</div>
    <main className={classes.Main}>{props.children}</main>
  </>
);
export default Layout;
