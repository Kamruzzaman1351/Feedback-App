import React from 'react';
import {Link} from "react-router-dom";

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
            <Link style={linkStyle} to="/" >Home</Link>
            <Link style={linkStyle} to="/about" >About</Link>
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