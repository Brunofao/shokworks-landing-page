import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import community from "./assets/images/community.png";
import whatCanYouBuild from "./assets/images/what-can-you-build.png";
import hereToAlwaysHelpYou from "./assets/images/here-to-always-help-you.png";
// Logos
import immersityLogo from "./assets/images/immersity-logo.png";
import wifipassLogo from "./assets/images/wifipass-logo.png";
import kinesisLogo from "./assets/images/kinesis-logo.png";
import mexperienciaLogo from "./assets/images/mexperiencia-logo.png";
import mobileLogo from "./assets/images/mobile-logo.png";
import goodtimesLogo from "./assets/images/goodtimes-logo.png";
// CSS
import "./App.scss";

const MobileNavbar = () => {
    return (
        <nav className="nav nav--mobile">
            <a
                href="#"
                className="nav__link nav__link--mobile nav__link--active"
            >
                Home
            </a>
            <a href="#" className="nav__link nav__link--mobile">
                About
            </a>
            <a href="#" className="nav__link nav__link--mobile">
                Portfolio
            </a>
            <a href="#" className="nav__link nav__link--mobile">
                Product
            </a>
            <a href="#" className="nav__link nav__link--mobile">
                Career
            </a>
            <a href="#" className="nav__link nav__link--mobile">
                Blog
            </a>

            <div className="search">
                <div className="search__input">
                    <input type="text" placeholder="Search Here" />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="currentColor"
                    >
                        <path
                            d="M21,20.076l-6.542-6.542A8.217,8.217,0,0,0,2.406,2.379a8.217,8.217,0,0,0,11.157,12.05l6.542,6.542ZM8.221,15.149a6.956,6.956,0,1,1,6.956-6.956A6.964,6.964,0,0,1,8.221,15.149Z"
                            transform="translate(0 0.028)"
                        />
                    </svg>
                </div>

                <a href="#" className="contact">
                    Contact us
                </a>
            </div>
        </nav>
    );
};

const App = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => setMobileMenu(!mobileMenu);

    return (
        <>
            {/* Header */}
            <header className="header">
                {/* Nav */}
                <nav role="navigation" className="nav">
                    <div className="nav__container">
                        <img src={logo} alt="Shokworks" className="logo" />

                        <nav className="nav nav--desktop">
                            <a href="#" className="nav__link nav__link--active">
                                Home
                            </a>
                            <a href="#" className="nav__link">
                                About
                            </a>
                            <a href="#" className="nav__link">
                                Portfolio
                            </a>
                            <a href="#" className="nav__link">
                                Product
                            </a>
                            <a href="#" className="nav__link">
                                Career
                            </a>
                            <a href="#" className="nav__link">
                                Blog
                            </a>
                        </nav>

                        <button
                            type="button"
                            className="button button--hamburguer"
                            onClick={handleMobileMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {mobileMenu ? <MobileNavbar /> : null}
                {/* ./Nav */}
            </header>
            {/* ./Header */}

            <header className="header" style={{ display: "none" }}>
                <div className="header__container">
                    <img src={logo} alt="Shokworks" className="logo" />

                    <nav
                        className="nav nav--desktop"
                        style={{ display: "none" }}
                    >
                        <ul>
                            <li>
                                <a href="#" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Product</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>

                        <div className="search">
                            <div className="search__input">
                                <input type="text" placeholder="Search Here" />

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                >
                                    <path
                                        d="M21,20.076l-6.542-6.542A8.217,8.217,0,0,0,2.406,2.379a8.217,8.217,0,0,0,11.157,12.05l6.542,6.542ZM8.221,15.149a6.956,6.956,0,1,1,6.956-6.956A6.964,6.964,0,0,1,8.221,15.149Z"
                                        transform="translate(0 0.028)"
                                    />
                                </svg>
                            </div>

                            <a href="#" className="contact">
                                Contact us
                            </a>
                        </div>
                    </nav>

                    <button
                        type="button"
                        className="btn hamburger"
                        onClick={handleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                        </svg>
                    </button>
                </div>

                {mobileMenu ? (
                    <nav className="nav nav--mobile">
                        <ul>
                            <li>
                                <a href="#" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Product</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>

                        <div className="search">
                            <div className="search__input">
                                <input type="text" placeholder="Search Here" />

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                >
                                    <path
                                        d="M21,20.076l-6.542-6.542A8.217,8.217,0,0,0,2.406,2.379a8.217,8.217,0,0,0,11.157,12.05l6.542,6.542ZM8.221,15.149a6.956,6.956,0,1,1,6.956-6.956A6.964,6.964,0,0,1,8.221,15.149Z"
                                        transform="translate(0 0.028)"
                                    />
                                </svg>
                            </div>

                            <a href="#" className="contact">
                                Contact us
                            </a>
                        </div>
                    </nav>
                ) : null}
            </header>

            <main>
                <section className="brand">
                    <img
                        src={community}
                        alt="Community"
                        className="brand__image"
                    />

                    <h1 className="brand__title">
                        A Brand New Way to See The World
                    </h1>

                    <div className="brand__cta">
                        <a href="#" className="brand__works">
                            Our Works
                        </a>
                        <a href="#" className="brand__knowmore">
                            Know More
                        </a>
                    </div>
                </section>

                <section className="process">
                    <div className="process__column process__column--order1">
                        <h2 className="process__title">
                            The Process About Our Work
                        </h2>

                        <p className="process__subheading">
                            <strong>Alejandro Laplana</strong> leads and
                            adaptable end-to-end development team consisting of
                            a large portion of captable enterprise mixed reality
                            solutions.
                        </p>

                        <a href="#" className="process__knowmore">
                            Know More
                        </a>
                    </div>

                    <div className="process__column process__column--text-center">
                        <img
                            src={whatCanYouBuild}
                            alt="What can you build"
                            className="process__image"
                        />
                    </div>
                </section>

                <section className="help-you">
                    <div className="help-you__column help-you__column--text-center">
                        <img
                            src={hereToAlwaysHelpYou}
                            alt="We are here to always help you"
                            className="help-you__image"
                        />
                    </div>

                    <div className="help-you__column help-you__column--center">
                        <h2 className="help-you__title text-red">
                            We are here to <strong>always help you</strong>
                        </h2>

                        <p className="help-you__subheading">
                            Shokworks team provide solutions and guidance to
                            every project, taking the project vision to high
                            level.
                        </p>
                    </div>
                </section>

                <section className="speciality-of-us">
                    <h2 className="speciality-of-us__title">
                        What is the <strong>Speciality Of Us?</strong>
                    </h2>

                    <p>Carrousel here!</p>
                </section>

                <section className="partnes-and-client">
                    <h2 className="partnes-and-client__title">
                        Our Partnes & Clients
                    </h2>

                    <div className="partnes-and-client__content">
                        <ul className="partnes-and-client__grid">
                            <li>
                                <div className="card">
                                    <img
                                        src={immersityLogo}
                                        alt=""
                                        className="logo logo--immersity"
                                        loading="lazy"
                                    />
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src={wifipassLogo}
                                        alt=""
                                        className="logo logo--wifipass"
                                    />
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src={kinesisLogo}
                                        alt=""
                                        className="logo logo--kinesis"
                                    />
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src={mexperienciaLogo}
                                        alt=""
                                        className="logo logo--mexperiencia"
                                    />
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src={mobileLogo}
                                        alt=""
                                        className="logo logo--mobile"
                                    />
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src={goodtimesLogo}
                                        alt=""
                                        className="logo logo--goodtimes"
                                    />
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="testimonials">
                    <h2>What Our Client Says?</h2>
                </section>

                <section className="contactus">
                    <h2>Facing Problem? Lets Get In Touch Now</h2>
                </section>
            </main>

            <footer></footer>
        </>
    );
};

export default App;
