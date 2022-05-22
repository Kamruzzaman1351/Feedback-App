import React from 'react';
import {NavLink} from "react-router-dom";

function Footer({title, backgroundColor,color,textAlign}) {
    const footerStyle = {
        backgroundColor,
        color,
        textAlign,
    };
    const linkStyle = {
        textDecoration: "none",
        color: "#fff",
        marginRight: "10px"
    }
  return (
    <footer style={footerStyle} className='footer'>
        <div className="container">
            <h5>&copy;{title}</h5>
            <div>
            <NavLink activeClassName="active" style={linkStyle} to="/" >Home</NavLink>
            <NavLink activeClassName="active" style={linkStyle} to="/about" >About</NavLink>
            </div>
        </div>
    </footer>
  )
}

Footer.defaultProps = {
    title: " 2022 FeedBack App",
    backgroundColor: "rgba(0,0,0,.3)",
    color:"#fff",
    textAlign: "center",
}

export default Footer