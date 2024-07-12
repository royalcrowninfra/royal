'use client'
import React from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'

const Header = () => {
  return (
    <header>
      <div>
        <div>
          {/* Logo Section */}
          <Logo/>
          <div>
            {/* Theme Tooggler */}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
