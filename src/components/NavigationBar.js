const NavigationBar = () => {
  return (
    <>
      {/* NABVAR SECTION */}
      <nav className="global-container bg-grey ">
        <div id="logo" />
        <ul className="flex-row gap-32 no-mp nav-list">
          <li>
            <a className="link-no-decoration" href="#Service">
              Our Services
            </a>
          </li>
          <li>
            <a className="link-no-decoration" href="#why-us">
              Why Us
            </a>
          </li>
          <li>
            <a className="link-no-decoration" href="#testi">
              Testimonial
            </a>
          </li>
          <li>
            <a className="link-no-decoration" href="#faq-section">
              FAQ
            </a>
          </li>
          <li>
            <button className="btn btn-success">Register</button>
          </li>
        </ul>
        <button
          id="sidebar-menu"
          className="btn-burger-menu"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasHarris"
          aria-controls="offcanvasRight"
        >
          <img
            src="assets/img/icon_menu.svg"
            alt="icon menu"
            width={24}
            height={24}
          />
        </button>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasHarris"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">BCR</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="flex-column gap-16 no-mp">
            <li>
              <a className="link-no-decoration" href="#Service">
                Our Services
              </a>
            </li>
            <li>
              <a className="link-no-decoration" href="#why-us">
                Why Us
              </a>
            </li>
            <li>
              <a className="link-no-decoration" href="#testi">
                Testimonial
              </a>
            </li>
            <li>
              <a className="link-no-decoration" href="#faq-section">
                FAQ
              </a>
            </li>
            <li>
              <button className="btn btn-success">Register</button>
            </li>
          </ul>
        </div>
      </div>
      {/* END SECTION */}
    </>
  );
};

export default NavigationBar;
