import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper";
import logo from "./assets/images/logo.svg";
import community from "./assets/images/community.png";
import whatCanYouBuild from "./assets/images/what-can-you-build.png";
import hereToAlwaysHelpYou from "./assets/images/here-to-always-help-you.png";
import immersityLogo from "./assets/images/immersity-logo.png";
import wifipassLogo from "./assets/images/wifipass-logo.png";
import kinesisLogo from "./assets/images/kinesis-logo.png";
import mexperienciaLogo from "./assets/images/mexperiencia-logo.png";
import mobileLogo from "./assets/images/mobile-logo.png";
import goodtimesLogo from "./assets/images/goodtimes-logo.png";
import quotes from "./assets/images/quote-left.png";
import rectangulesAndCircles from "./assets/images/rectangules-circles.png";
import emailSent from "./assets/images/email-sent.png";
import contactUsBanner from "./assets/images/contact-us-banner.png";
import facebookIcon from "./assets/images/facebook-icon.png";
import skypeIcon from "./assets/images/skype-icon.png";
import linkedinIcon from "./assets/images/linkedin-icon.png";
import instagramIcon from "./assets/images/instagram-icon.png";
import footerLane from "./assets/images/footer-lane.png";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "./App.scss";

// Puede estar en un .env
// Key de https://newsapi.org/
const API_KEY = "03a558fe13874de2a9c223b3a7f3a0d5";

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

            <div className="search search--mobile">
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

const SwiperFooter = ({ children }) => children;

const App = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [news, setNews] = useState([]);
    const [clients, setClients] = useState([]);
    const [swiper, setSwiper] = useState(null);
    const [swiperTwo, setSwiperTwo] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);

    const handleMobileMenu = () => setMobileMenu(!mobileMenu);

    const handleForm = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        let clientSay = {};

        for (let [key, value] of formData.entries()) {
            clientSay[key] = value;
        }

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(clientSay),
        };

        fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then((response) => response.json())
            .then((data) => setClients((prevState) => [...prevState, data]));
    };

    useEffect(() => {
        if (swiper) swiper.slideTo(3);
    }, [swiper]);

    useEffect(() => {
        async function getNews() {
            fetch(
                `https://newsapi.org/v2/everything?q=Apple&from=2022-01-22&sortBy=popularity&apiKey=${API_KEY}`
            )
                .then((response) => response.json())
                .then(({ articles }) => setNews(articles));
        }

        getNews();
        console.log(news);
    }, []);

    useEffect(() => {
        async function getClientsTestimonials() {
            fetch(
                "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
            )
                .then((response) => response.json())
                .then((data) => setClients(data));
        }

        getClientsTestimonials();
        console.log(clients);
    }, []);

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

                    <div>
                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                A11y,
                                EffectCoverflow,
                            ]}
                            effect="coverflow"
                            centeredSlides
                            spaceBetween={0}
                            slidesPerView={3}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            breakpoints={{
                                1536: {
                                    spaceBetween: 0,
                                    slidesPerView: 4,
                                },
                                1280: {
                                    spaceBetween: 0,
                                    slidesPerView: 3,
                                },
                                1024: {
                                    spaceBetween: 0,
                                    slidesPerView: 3,
                                },
                                768: {
                                    spaceBetween: 0,
                                    slidesPerView: 2,
                                },
                                300: {
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                },
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl =
                                    prevRef.current;
                                swiper.params.navigation.nextEl =
                                    nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            onSlideChange={() => console.log("slide change")}
                        >
                            {news.map(
                                ({ urlToImage, title, description }, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="speciality-of-us__card">
                                                <img
                                                    src={urlToImage}
                                                    alt="Lorem picsum"
                                                    className="speciality-of-us__card__image"
                                                />

                                                <h3 className="speciality-of-us__card__title">
                                                    {title}
                                                    {/* <strong>Communication</strong> */}
                                                </h3>

                                                <p className="speciality-of-us__card__subheading">
                                                    {description}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                }
                            )}

                            <SwiperFooter>
                                <div className="arrow">
                                    <button
                                        ref={prevRef}
                                        className="arrow__button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 17.754 17.754"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M19.047,10.6H3.6l7.419,7.419-.853.853L1.293,10,10.17,1.118l.853.853L3.6,9.392H19.047Z"
                                                transform="translate(-1.293 -1.118)"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        ref={nextRef}
                                        className="arrow__button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 17.754 17.755"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M18.754,10,9.876,18.873l-.853-.853L16.442,10.6H1V9.393H16.443L9.023,1.971l.853-.853L18.754,10Z"
                                                transform="translate(-1 -1.118)"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </SwiperFooter>
                        </Swiper>
                    </div>
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

                <section className="testimonial">
                    <h2 className="testimonial__title">
                        What Our <strong>Client Says?</strong>
                    </h2>

                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            A11y,
                            EffectCoverflow,
                        ]}
                        centeredSlides
                        spaceBetween={0}
                        slidesPerView={1}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef2.current;
                            swiper.params.navigation.nextEl = nextRef2.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        onSwiper={(swiper) => setSwiperTwo(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        {clients.map(({ id, body }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div className="testimonial__card">
                                        <img
                                            src="https://picsum.photos/255/255"
                                            alt="Lorem picsum"
                                            className="testimonial__card__photo"
                                        />

                                        <div className="testimonial__card__comment">
                                            <img
                                                src={quotes}
                                                alt="Quote left"
                                                className="testimonial__quote"
                                            />
                                            <p>{body}</p>
                                            <img
                                                src={quotes}
                                                alt="Quote right"
                                                className="testimonial__quote testimonial__quote--right"
                                            />
                                        </div>

                                        <div className="testimonial__card__name">
                                            Rubiya Mond De-Patrica
                                        </div>

                                        <div className="testimonial__card__rank">
                                            CEO, Zexbay-Fine
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                        {/*
                            <SwiperSlide>
                                <div className="testimonial__card">
                                    <img
                                        src="https://picsum.photos/255/255"
                                        alt="Lorem picsum"
                                        className="testimonial__card__photo"
                                    />

                                    <div className="testimonial__card__comment">
                                        Shokworks are dedicated and they
                                        accomplished all my ideas and thoughts for
                                        my project, excellent guidance.
                                    </div>

                                    <div className="testimonial__card__name">
                                        Rubiya Mond De-Patrica
                                    </div>

                                    <div className="testimonial__card__rank">
                                        CEO, Zexbay-Fine
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial__card">
                                    <img
                                        src="https://picsum.photos/255/255"
                                        alt="Lorem picsum"
                                        className="testimonial__card__photo"
                                    />

                                    <div className="testimonial__card__comment">
                                        Shokworks are dedicated and they
                                        accomplished all my ideas and thoughts for
                                        my project, excellent guidance.
                                    </div>

                                    <div className="testimonial__card__name">
                                        Rubiya Mond De-Patrica
                                    </div>

                                    <div className="testimonial__card__rank">
                                        CEO, Zexbay-Fine
                                    </div>
                                </div>
                            </SwiperSlide>
                         */}
                        <SwiperFooter>
                            <div className="arrow">
                                <button
                                    ref={prevRef2}
                                    className="arrow__button arrow--no-shadow"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 17.754 17.754"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M19.047,10.6H3.6l7.419,7.419-.853.853L1.293,10,10.17,1.118l.853.853L3.6,9.392H19.047Z"
                                            transform="translate(-1.293 -1.118)"
                                        />
                                    </svg>
                                </button>

                                <button
                                    ref={nextRef2}
                                    className="arrow__button arrow--no-shadow"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 17.754 17.755"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M18.754,10,9.876,18.873l-.853-.853L16.442,10.6H1V9.393H16.443L9.023,1.971l.853-.853L18.754,10Z"
                                            transform="translate(-1 -1.118)"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </SwiperFooter>
                    </Swiper>
                </section>

                <section className="contactus">
                    <h2 className="contactus__title">
                        Facing Problem?
                        <br />
                        <strong> Lets Get In Touch Now</strong>
                    </h2>

                    <div className="contactus__form">
                        <form method="POST" onSubmit={handleForm}>
                            <div className="form">
                                <div className="form__grid">
                                    <div className="float-label">
                                        <input
                                            type="text"
                                            id="firstname"
                                            placeholder="Bruno"
                                            className="float-label__input"
                                        />

                                        <label
                                            htmlFor="firstname"
                                            className="float-label__label"
                                        >
                                            First name
                                        </label>
                                    </div>

                                    <div className="float-label">
                                        <input
                                            type="text"
                                            id="lastname"
                                            placeholder="Bruno"
                                            className="float-label__input"
                                        />

                                        <label
                                            htmlFor="lastname"
                                            className="float-label__label"
                                        >
                                            Last name
                                        </label>
                                    </div>

                                    <div className="form__grid--full float-label">
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder="brunfao@gmail.com"
                                            className="float-label__input"
                                        />

                                        <label
                                            htmlFor="email"
                                            className="float-label__label"
                                        >
                                            Your email address
                                        </label>
                                    </div>

                                    <div className="form__grid--full float-label float-label--select">
                                        <select
                                            id="selected-opt"
                                            className="float-label__select"
                                        >
                                            <option disabled>Select One</option>
                                        </select>

                                        <label
                                            htmlFor="selected-opt"
                                            className="float-label__label float-label__label--select"
                                        >
                                            Which related problem you are
                                            facing?
                                        </label>
                                    </div>

                                    <div className="form__grid--full float-label float-label--textarea">
                                        <textarea
                                            name="body"
                                            id="message"
                                            cols="20"
                                            rows="5"
                                            placeholder="Here goes your message"
                                            className="float-label__textarea"
                                        ></textarea>

                                        <label
                                            htmlFor="message"
                                            className="float-label__label float-label__label--textarea"
                                        >
                                            Type your message
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="brand__knowmore contactus__btn"
                                    >
                                        Our Works
                                    </button>
                                </div>
                            </div>

                            <img
                                src={emailSent}
                                alt="Email sent to us"
                                className="form__sent"
                            />
                        </form>

                        <div className="contactus__banner">
                            <img
                                src={contactUsBanner}
                                alt="Contact us banner"
                            />
                        </div>

                        <img
                            src={rectangulesAndCircles}
                            alt="Rectangules and circles"
                            className="contactus__rectangules"
                        />
                    </div>
                </section>
            </main>

            <footer className="footer">
                <img src={logo} alt="Shokworks logo" className="footer__logo" />

                <nav className="footer__nav">
                    <div>
                        <span className="footer__heading">Contact us</span>

                        <ul className="footer__list">
                            <li className="footer__item footer__item--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                                </svg>

                                <span>+(1) 824-5428</span>
                            </li>
                            <li className="footer__item footer__item--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                                </svg>

                                <span>Miami, United States</span>
                            </li>
                            <li className="footer__item footer__item--icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                                </svg>

                                <span>yfuentes@shokworks.io</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <span className="footer__heading">Our company</span>

                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    About
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Product
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Portfolio
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Career
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <span className="footer__heading">Social contacts</span>

                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Facebook
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Youtube
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Vimeo
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    Skype
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <span className="footer__heading">Address</span>

                            <address className="footer__address">
                                Internet Systems Consortium, Inc. 950 Charter
                                Street Redwood City, CA USA.
                            </address>
                        </div>

                        <div>
                            <span className="footer__heading">Follow us</span>

                            <ul className="footer__list footer__list--row">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <img
                                            src={facebookIcon}
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <img src={skypeIcon} alt="Skype" />
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <img
                                            src={linkedinIcon}
                                            alt="LinkedIn"
                                        />
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">
                                        <img
                                            src={instagramIcon}
                                            alt="Instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <img
                    src={footerLane}
                    alt="Foot lane"
                    className="footer__lane"
                />
            </footer>
        </>
    );
};

export default App;
