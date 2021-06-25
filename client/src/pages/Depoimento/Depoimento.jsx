import React ,{ useEffect, useState }from 'react';
import './Depoimento.css';
import Slider from "react-slick";
import axios from 'axios';
import url from '../../apiURL';

import { default as CardDepoiment } from "../../components/CardDepoiment";


export default function Depoimento(){

    const [depoiment, setDepoiment] = useState([]);
    
    const loadDepoiment = async () => {
        const res = await axios.get(`${url.url}/api/depoiments`);
        setDepoiment(res.data);
    };

    useEffect(() => {
        loadDepoiment();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "ease",
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
          ]
        
    };
    
    return(
        <div id="depoimentos" className="slick-depoimentos">
            <div className="txt-Depoimento">
                <p>Nossos clientes</p>
            </div>
            <div className="cont">
                <Slider {...settings}>
                    
                    {depoiment?.map(({ image, description, name})=>(
                        <CardDepoiment imagemDpm={image[0].url} textoDpm={description} tituloDpm={name}/> 
                    ))}
                   
                </Slider>
            </div>
        </div>
    
    );
}

