import React ,{ useEffect, useState }from 'react';
import './ContentPage.css';
import { ContentMobile } from '../../components';
import axios from 'axios';
import Button from '../../components/Button';
import LogoMissao from "./assets/logo-missao.png";
import Image from "./assets/contentimg.png";
import url from '../../apiURL';

export default function ContentPage(){

    const [content, setContent] = useState([]);
    const [clicado, setClicado] = useState(
        {array: '0',
        }
    );

    let i = clicado?.array;

    const loadContent = async () => {
        const res = await axios.get(`${url.url}/api/conteudos`);
        setContent(res.data);
    };

    useEffect(() => {
        loadContent();
    }, []);

    return(
        <>
            <div className="header-title">
                <h1>Nosso conteúdo</h1>
            </div>
            <div className="struct-content">
                <div className="image-section">
                    <img className="image-of-turn" src={ content[i]?.imagem.url }/>
                </div>
                <div className="second-column">
                    <div className="all-information">
                        <h2> { content[i]?.nomeConteudo } </h2>
                        <div className="content-p">
                            <p> { content[i]?.descricaoConteudo }</p>
                        </div>
                        <div className="button-content">
                            <Button nomeBtn="Link para a postagem" linkBtn={content[i]?.link} buttonTextColor="white"/>
                        </div>
                    </div>
                    <div className="card-compact" >
                        <div className="content-card-title">
                            <p>Acesse conteúdos gratuitos:</p>
                        </div>
                        <div className="cards-content">
                            <div className="card-content1">
                                <img className="thumb1" src={content[0]?.imagem.url}
                                        onClick={() => {
                                            setClicado({array: '0', });
                                        }}
                                />
                                <h4>{content[0]?.nomeConteudo}</h4>
                            </div>
                            <div className="card-content2">
                                <img className="thumb2" src={content[1]?.imagem.url}
                                        onClick={() => {
                                            setClicado({array: '1', })
                                        }}
                                    />
                                <h4>{content[1]?.nomeConteudo}</h4>
                            </div>
                            <div className="card-content3">
                                <img className="thumb3" src={content[2]?.imagem.url}
                                    onClick={() => {
                                        setClicado({array: '2', })
                                    }}
                                />
                                <h4>{content[2]?.nomeConteudo}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile">
            {content?.map(({nomeConteudo, descricaoConteudo, imagem, link})=>(
                <>
                    <ContentMobile className="mobile" 
                    contentTitle={nomeConteudo} 
                    image={imagem.url} 
                    textDescription={descricaoConteudo}
                    linkConteudo={link}
                    />    
                </>
            ))}
                   
            </div>
        </>
    );
}