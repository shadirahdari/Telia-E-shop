import { Fragment } from "react";
import "./style.css";

export const OverLine = ({ company, title }) => {
  return (
    <Fragment>
    <div>{company}</div>
    <span className="es-font">{title}</span>
    </Fragment>
  );
};
