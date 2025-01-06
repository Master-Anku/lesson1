import React from "react";

const Footer = ()=> {
    return (
        <footer style={{backgroundColor:"yellow", color:"#000", padding:"15px 0"}}>
           <p>Copyright &copy; by MasterAnku, {new Date().getFullYear()}</p> 
        </footer>
    )
}


export default Footer;