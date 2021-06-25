import React, { useEffect, useState } from 'react';
import './ContactPage.css';
import axios from 'axios';
import { Button } from '../../components';
import url from '../../apiURL';

export default function ContactPage(){

    const [inputTextName, setInputTextName] = useState('');
    const [inputTextEmail, setInputTextEmail] = useState('');
    const [inputTextTel, setInputTextTel] = useState('');
    const [inputTextAss, setInputTextAss] = useState('');
    const [inputTextMsg, setInputTextMsg] = useState('');

    const [contact, setContact] = useState([]);

    const loadContact = async () => {
        const res = await axios.get(`${url.url}/api/contact`);
        setContact(res.data);
    };

    useEffect(() => {
        loadContact();
    }, []);

    return(
        <>
            <div className="page-container">
                <div className="image-contact"/>
                <div className="contact-container">
                    <div className="contact-elements">
                        <div className="section-contact-title">
                            <h1>Contato</h1>
                        </div>

                        {contact?.map(({ description }) => (
                            <>
                                <p>{description}</p>
                            </>
                        ))}
                        
                        <div className='contact-input'>
                                <input 
                                    type="text" 
                                    className="nome-input" 
                                    placeholder="Nome"
                                    value={inputTextName}
                                    onChange={(e) => setInputTextName(e.target.value)}
                                />
                                <div className="e-mail-telefone">
                                    <input 
                                        type="e-mail" 
                                        className="e-mail-input" 
                                        placeholder="E-mail"
                                        value={inputTextEmail}
                                        onChange={(e) => setInputTextEmail(e.target.value)}
                                    /> 
                                    <input 
                                        type="tel"
                                        className="telefone-input" 
                                        placeholder="Telefone"
                                        value={inputTextTel}
                                        onChange={(e) => setInputTextTel(e.target.value)}
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    className="assunto" 
                                    placeholder="Assunto"
                                    value={inputTextAss}
                                    onChange={(e) => setInputTextAss(e.target.value)}
                                /> 
                                <textarea 
                                    className="mensagem" 
                                    placeholder="Mensagem"
                                    value={inputTextMsg}
                                    onChange={(e) => setInputTextMsg(e.target.value)}
                                /> 
                        </div>
                        <div className="botao-contato-web">
                            <Button className="botao-contato-web" nomeBtn="Enviar"/>
                        </div>
                        <div className="botao-contato-mobile">
                            <Button className="botao-contato-mobile" buttonColor="#EBECEE" buttonTextColor="#032C66" nomeBtn="Enviar"/>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    );
}