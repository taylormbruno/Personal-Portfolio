import React from "react";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  paddingTop: "8px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

function Footer() {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              <h5>Taylor Bruno &copy;2020</h5>
          </div>
      </div>
  )
}

export default Footer
