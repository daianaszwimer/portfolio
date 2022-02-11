import React, {useContext} from "react";
import {ThemeContext} from "styled-components";

const Link = ({text, link, title}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <a className={`link-${theme}`} href={link} target='_blank' rel="noopener noreferrer" title={title ? title : text}>{text}</a>
  )
}

export default Link