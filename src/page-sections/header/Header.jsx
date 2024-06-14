import React, { useContext } from "react"
import "./Header.scss"
import { MenuContext } from "../../utils/context/menu-context"
import { ScrollContext } from "../../utils/context/scroll-context"
import { ThemeContext } from "../../utils/context/theme-context"
import { FaGithub } from "react-icons/fa"
import { MdLightMode } from "react-icons/md"
import { TbMenu2 } from "react-icons/tb"

const Header = () => {
  const { openNavigatorMenu } = useContext(MenuContext)
  const { projectRef, contactRef, experienceRef, scrollToRef } =
    useContext(ScrollContext)
  const { lightMode, toggleLightMode } = useContext(ThemeContext)
  return (
    <header className="paddings innerWidth flexCenter header-container">
      <a href="https://github.com/andersonzw/" target="_blank" rel="noreferrer">
        <FaGithub className={` react-icon github-icon`} />
      </a>

      <div className="flexCenter header-navigator">
        {/* <p onClick={() => scrollToRef(aboutRef)}>About</p> */}
        <p onClick={() => scrollToRef(projectRef)}>Projects</p>
        <p onClick={() => scrollToRef(experienceRef)}>Experiences</p>
        <p onClick={() => scrollToRef(contactRef)}>Contact</p>
      </div>
      <MdLightMode
        className="react-icon light-icon"
        onClick={() => {
          toggleLightMode()
        }}
      />
      <TbMenu2
        className="react-icon menu-icon"
        onClick={() => {
          openNavigatorMenu()
        }}
      />
    </header>
  )
}

export default Header
