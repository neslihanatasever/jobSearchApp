import React from 'react'

const NavItem = ({ children }) => 
  <li className="menuList text-[#6f6f6f] hover:text-blueColor">{children}</li>

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>
          Search
        </h1>
      </div>

      <ul className="menu flex gap-8">
        <NavItem>Jobs</NavItem>
        <NavItem>Companies</NavItem>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
      </ul>
    </div>
  )
}

export default NavBar
