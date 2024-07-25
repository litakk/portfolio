import "./style.scss"
import AboutPic from "../../assets/images/about.png"
import Licence from "../../assets/icons/licence.png"
import Heading from "../common/Heading"
import Values from "./Values.jsx"
import CompanyBlog from "./CompanyBlog.jsx"
import Team from "./Team.jsx"
import Marquee from "../common/Marquee"
import ContactsForm from "../ContactsForm"
import CarouselComponent from "../common/Carousel"

import Img1 from "../../assets/images/img1.png"
import Img2 from "../../assets/images/img2.png"
import Img3 from "../../assets/images/img3.png"
import Img4 from "../../assets/images/img4.png"
import Img5 from "../../assets/images/img5.png"
import { useTranslation } from "react-i18next"

function About() {
    const images = [Img1, Img2, Img3, Img4, Img5]
    const { t } = useTranslation()

    return (
        <div id="about-wrapper">
            <CarouselComponent images={images} blurred={true}>
                <div className="inner-carousel">
                    <h1>{t('carousel.title')}</h1>
                    <br />
                    <p>{t('carousel.subtitle')}</p>
                    <br />
                    <button className="warning-btn">{t('carousel.button')}</button>
                </div>
            </CarouselComponent>


            <div className="about">
                <Heading size={1.5}>{t('about.title')}</Heading>
                <div className="about-content">
                    <div className="left">
                        <img src={AboutPic} alt="About" width="100%" height={400} />
                    </div>
                    <div className="right">
                        <p>{t('about.p1')}</p>
                        <br />
                        <p>{t('about.p2')}</p>
                        <br />
                        <p>{t('about.p3')}</p>
                        <br />
                        <button className="warning-btn">
                            <img src={Licence} alt="Licence" />
                            {t('about.lycences')}
                        </button>
                    </div>
                </div>
            </div>

            <Marquee />

            <div className="values">
                <Values />
            </div>

            <Marquee reversed={true} />

            <div id="teams">
                <Heading size={1.5}>Наша команда</Heading>
                <Team />
            </div>

            <Marquee />

            <div className="company-blog">
                <Heading size={1}>Блог компании</Heading>
                <CompanyBlog />
            </div>


            <ContactsForm />
        </div>
    );
}

export default About;