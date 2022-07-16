import React from "react";
import { Image } from 'react-bootstrap'
import "./Section.css";
import logo from '../../assets/logo-only.svg'

const section = ({ flexDirection }) => {
  return (
    <div className="section" style={{ flexDirection: flexDirection }}>
      <div className="left-container">
      <Image style={imgStyles} src={logo} alt="logo" />
      </div>

      <div className="right-container">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laudantium esse fugiat illum tempore sapiente soluta labore voluptas
            iusto deleniti ab suscipit dolores quisquam corrupti facilis, id
            temporibus mollitia repellat omnis tempora commodi eveniet.
            Incidunt, perspiciatis, adipisci laboriosam dolores quos dolor
            voluptate odio magnam aperiam, alias asperiores pariatur! Nisi,
            libero!
          </p>
        </div>
      </div>
    </div>
  );
};

const imgStyles = {
  height: '19vmin',
  
}

export default section;