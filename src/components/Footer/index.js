import React from "react";

var style = {
  backgroundColor: "#272727",
  borderTop: "1px solid #272727",
  paddingTop: "8px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%",
  color: "#ffe400"
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
