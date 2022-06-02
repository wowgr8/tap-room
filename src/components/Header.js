import React from "react";

function Header(){
  return (
    <React.Fragment>
      <header className="row block center">
        <div>
          <a href="#/">
            <h1>Kombucha Tap Room</h1>
          </a>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;