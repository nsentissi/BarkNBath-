import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
