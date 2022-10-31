const navbar = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand*/}
      <a className="navbar-brand ps-3" href="index.html">
        Orca Admin
      </a>
      {/* Sidebar Toggle*/}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <svg
          className="svg-inline--fa fa-bars"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
          />
        </svg>
        {/* <i class="fas fa-bars"></i> Font Awesome fontawesome.com */}
      </button>
      {/* Navbar Search*/}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button
            className="btn btn-primary"
            id="btnNavbarSearch"
            type="button"
          >
            <svg
              className="svg-inline--fa fa-magnifying-glass"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="magnifying-glass"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
              />
            </svg>
            {/* <i class="fas fa-search"></i> Font Awesome fontawesome.com */}
          </button>
        </div>
      </form>
      {/* Navbar*/}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle show"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <svg
              className="svg-inline--fa fa-user fa-fw"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
              />
            </svg>
            {/* <i class="fas fa-user fa-fw"></i> Font Awesome fontawesome.com */}
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end show"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="#!">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Activity Log
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

const sidebar = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <a className="nav-link" href="index.html">
              <div className="sb-nav-link-icon">
                <svg
                  className="svg-inline--fa fa-gauge-high"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gauge-high"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"
                  />
                </svg>
                {/* <i class="fas fa-tachometer-alt"></i> Font Awesome fontawesome.com */}
              </div>
              Dashboard
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">Footer Notes Here</div>
      </nav>
    </div>
  );
};

const mainContent = () => {
  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Tables</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Tables</li>
          </ol>
          <div className="card mb-4">
            <div className="card-body">
              Any concerns
              <a target="_blank" href="#">
                Developers
              </a>
              .
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">API integrations</div>
            <div className="card-body">
              <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                <div className="dataTable-top">
                  <div className="dataTable-dropdown">
                    <label>
                      <select className="dataTable-selector">
                        <option value={5}>5</option>
                        <option value={10} selected>
                          10
                        </option>
                        <option value={15}>15</option>
                      </select>
                      &nbsp; entries per page
                    </label>
                  </div>
                  <div className="dataTable-search">
                    <input
                      className="dataTable-input"
                      placeholder="Search..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="dataTable-container">
                  <table id="datatablesSimple" className="dataTable-table">
                    <thead>
                      <tr>
                        <th data-sortable style={{ width: "19.6152%" }}>
                          <a href="#" className="dataTable-sorter">
                            Name
                          </a>
                        </th>
                        <th data-sortable style={{ width: "28.9685%" }}>
                          <a href="#" className="dataTable-sorter">
                            Position
                          </a>
                        </th>
                        <th data-sortable style={{ width: "15.6066%" }}>
                          <a href="#" className="dataTable-sorter">
                            Office
                          </a>
                        </th>
                        <th data-sortable style={{ width: "9.19294%" }}>
                          <a href="#" className="dataTable-sorter">
                            Age
                          </a>
                        </th>
                        <th data-sortable style={{ width: "15.179%" }}>
                          <a href="#" className="dataTable-sorter">
                            Start date
                          </a>
                        </th>
                        <th data-sortable style={{ width: "11.4377%" }}>
                          <a href="#" className="dataTable-sorter">
                            Salary
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="dataTable-bottom">
                  <div className="dataTable-info">
                    Showing 1 to 10 of 57 entries
                  </div>
                  <nav className="dataTable-pagination">
                    <ul className="dataTable-pagination-list">
                      <li className="active">
                        <a href="#" data-page={1}>
                          1
                        </a>
                      </li>
                      <li className>
                        <a href="#" data-page={2}>
                          2
                        </a>
                      </li>
                      <li className="pager">
                        <a href="#" data-page={2}>
                          ›
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright © Orca Inc. 2022</div>
            <div>
              <a href="#">Privacy Policy</a>·
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div>
      {navbar()}
      <div id="layoutSidenav">
        {sidebar()}
        {mainContent()}
      </div>
    </div>
  );
}
