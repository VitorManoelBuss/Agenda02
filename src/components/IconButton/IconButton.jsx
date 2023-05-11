import React from "react";


const IconButton = ({ icon, onClick, style }, ...rest) => {
  return (
    <button onClick={() => onClick()}>
      <img style={style} src={icon} alt="icon" />
    </button>
  )
}

export {
  IconButton
}