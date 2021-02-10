import React from "react"

const Header =() => { 
    return (
      <header>
        <div>
        <div>
          <div class="logo">
            <img src="static/images/logo.svg" width="228" />
          </div>
          <div class="search">
            <form>
              <input type="text" placeholder="Search documentation..." />
            </form>
          </div>
        </div>
        <div class="authentication-buttons">
          <a href="#" class="btn btn-secondary">Login</a>
          <a href="#" class="btn btn-primary">Sign up for free</a>
        </div>
      </div>
      </header> )
}

export default Header 