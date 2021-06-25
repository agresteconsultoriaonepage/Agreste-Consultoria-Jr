import React, { useState, useEffect } from "react";
import './Footer.css';
import axios from "axios";
import iconInsta from "./imagem/insta.png";
import iconTell from "./imagem/telefone.png";
import logoCiti from "./imagem/logo-citi.png";
import logoFooter from "./imagem/logoAgreste.png";
import url from '../../apiURL';

function Footer() {
    const [Footer, setFooter] = useState([]);

    const loadFooter = async () => {
        const res = await axios.get(`${url.url}/api/company`);
        setFooter(res.data);
    };

    useEffect(() => {
        loadFooter();
    }, []);

    
    return(
        <footer class="footer">
            <div class="footer-esquerda">
                <div class="footer-social">
                    <div class="social-icon">
                        <img src={iconTell} alt=""/>
                        <img src={iconInsta} alt=""/>
                    </div>
                    <div class="social-txt">
                    {Footer?.map(({phone, instagram})=>(
                        <>
                            <p>{phone}</p>
                            <p>{instagram}</p>
                        </>
                    ))}   
                    </div>
                </div>
                {Footer?.map(({contact})=>(
                        <>
                            <p class="txt-contato">{contact}</p>
                        </>
                ))} 
            </div>
            <div class="footer-logo"> 
                <img src={logoFooter} alt=""/>
            </div>
            <div class="endereco">
                {Footer?.map(({adress})=>(
                    <>
                        <p>{adress}</p>
                    </>
                ))} 
                <div class="footer-logo-citi">
                    <strong>Made with &#60;&#47;&#62; and &hearts; by </strong>
                    <img src={logoCiti} alt=""/>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
