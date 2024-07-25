import Heading from "../common/Heading"
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { CONTEXT, globalReducer } from '../../db'
import { useContext } from 'react'



function Nav(props) {
    const navigate = useNavigate();
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const state = useContext(CONTEXT)


    const goToTeamsHash = () => {
        navigate('/about');
        setTimeout(() => {
            const element = document.getElementById('teams');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    function initiateChangeLanguage(e) {
        const newLanguage = language === "en" ? "ru" : "en";
        state.dispatch({ type: "CHANGE_LANG", currentLanguage: newLanguage })
        changeLanguage(newLanguage)
    }

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={"/"}>
                        <Heading size={1.5}>Fonte</Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">
                    <Link to={"/about"}>{t('nav.about')}</Link>
                    <a onClick={goToTeamsHash}>{t('nav.team')}</a>
                    <Link to={"/blog"}>{t('nav.blog')}</Link>
                    <Link to={"/products"}>{t('nav.products')}</Link>
                    <Link to={"/contacts"}>{t('nav.contacts')}</Link>
                </div>

                <div className="auth">
                    <button className="warning-btn">{t('nav.login')}</button>
                    <span onClick={initiateChangeLanguage} >
                        <ins><small>{t('lang')}</small></ins>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;