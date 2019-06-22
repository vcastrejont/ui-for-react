import React from "react";

const Aside = () => {
  return (
    <aside>
      <nav>
        <div className="sidebar-sticky">
          <div className="logo">WithStyle 🕶</div>
          <h4>Main menu</h4>
          <ul>
            <li>
              <a className=" active" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Integrations
              </a>
            </li>
          </ul>

          <h4>Saved reports</h4>
          <ul>
            <li>
              <a className="nav-link" href="#">
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
