import './App.css';
import Logo from './assets/logo.jpg'
import ico from './assets/ico.png'
import columns from './assets/columns.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { isClickableInput } from '@testing-library/user-event/dist/utils';
import { click } from '@testing-library/user-event/dist/click';
import { useState, useEffect } from 'react'
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  const [slidePerView, setSlidePerView] = useState(1)
 
  const data = [    //Academia

    { id: '1', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d97d4a211272251.672005f560d14.jpeg '},
    { id: '2', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/23e3d6211272251.672005f4821b8.jpeg '},
    { id: '3', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c6139d211272251.672005f50af70.jpeg '},
  ]
  const data2 = [    // Moda

    { id: '4', alt:'Moda', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4072b3211272331.672006613cfee.jpeg '},
    { id: '5', alt:'Moda',image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/842265211272331.672006613d8db.jpeg '},
    { id: '5', alt:'Moda', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/29b900211272331.672006613c7e7.jpeg '},
  ]
  const data3 = [    // Tecnologia

    { id: '4', alt:'Moda', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a4ea72218101985.679b910a34972.jpg '},
    { id: '5', alt:'Moda',image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/210300211361337.67217ba474b36.jpg '},
    { id: '5', alt:'Moda', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d59567211271583.6720022f0ffb1.jpg '},
  ]

   return (
  
    <div className="App">{/*App*/}
        <header className="App-header">
        </header>

      <section class="headMain">
        <div class="headCenter">
          <div class="headMenu">         
            <div class="logo">
              <div class="LogoPlenus">
                <img src={Logo}></img>
              </div>
            </div>  

              <div class="itemsMenu">
                <a href="#sobre" class="menuItem">Quem Somos?</a>
                <a href="#objetivos" class="menuItem">Objetivos</a>
                <a href="#trabalhos" class="menuItem">Nossos Trabalhos</a>
                <a href="#contatos" class="menuItem">Contato</a>
              </div>

          </div>{/*headMenu*/}     
        </div>{/*headCenter*/}
      </section>{/*headMain*/}
      
      <section class="ArticleMain" id='sobre'>      
        <div class='ArticleCenter'>
          <div class="ArticleTitle">
            <h1>SOBRE NÓS</h1>
            <p>COM MAIS DE 2 ANOS DE <br />
              EXPERIÊNCIA NO MERCADO, <br />
              A PLENUS MARKETING<br />ALMEJA APRIMORAR O SEU NEGÓCIO!
            </p>
          </div>{/*ArticleTitle*/} 
          <div class="logo">
              <div class="ico">
                <img src={ico}></img>
              </div>
            </div>  
        </div>{/*ArticleCenter*/}
      </section>{/*ArticleMain*/}  
      <div className='Objetivos' id='objetivos'>Objetivos</div>
      <section class="PresentationMain">
        <div class='PresentationCenter'>
          <div class="PresentationTitle">
            <div class="columns">
              <img src={columns}></img>
            </div>
              <p>A Plenus Marketing Digital é uma agência
    especializada em impulsionar a presença online de
    empresas por meio de estratégias integradas e
    inovadoras. Com foco em resultados, oferecemos
    soluções personalizadas que abrangem desde a criação
    de campanhas até o gerenciamento de redes sociais e
    otimização para motores de busca (SEO). Nosso
    compromisso é conectar marcas ao seu público-alvo,
    aumentando visibilidade, engajamento e conversões.
              </p>
          </div>{/*PresentationTitle*/} 
        </div>{/*PresentationCenter*/}
      </section>{/*PresentationMain*/}

      <section class="SliderMain" id='trabalhos'>
        <div className='Slider'>
          <div className='container'>
            <h1 className='NossosTrabalhos'>Nossos Trabalhos</h1>
            <p className='Academia'>Academia</p>
    <Swiper
    slidesPerView={slidePerView}
    navigation
    >
      {data.map( (item) => (     //Academia
      <SwiperSlide key={item.id}>
        <img
          src={item.image}
          alt="Slider"
          className="slide-item"
        />
      </SwiperSlide>
      ))}
    </Swiper>

          </div>
        </div>
        <div className='Slider'>
          <div className='container'>
            <p className='Moda'>Moda</p>
    <Swiper
    slidesPerView={slidePerView}
    navigation
    >
      {data2.map( (item) => (     //Moda
      <SwiperSlide key={item.id}>
        <img
          src={item.image}
          alt="Slider"
          className="slide-item"
        />
      </SwiperSlide>
      ))}
    </Swiper>  

          </div>
        </div>
        <div className='Slider'>
          <div className='container'>
            <p className='Tecnologia'>Tecnologia</p>
    <Swiper
    slidesPerView={slidePerView}
    navigation
    >
      {data3.map( (item) => (     //Tecnologia
      <SwiperSlide key={item.id}>
        <img
          src={item.image}
          alt="Slider"
          className="slide-item"
        />
      </SwiperSlide>
      ))}
    </Swiper>

          </div>
        </div>
      </section>{/*SliderMain*/}
      <div className='Contatos' id='contatos'>Fale Conosco</div>
      <div className="flex-center">
        <a href="https://web.facebook.com/profile.php?id=61567377090402" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook fa-4x icon-3d" alt="Facebook"></i>
        </a>
        <a href="https://www.instagram.com/plenusmarketingdigital/?hl=en" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram fa-4x icon-3d" alt="Instagram"></i>
        </a>
        <a href="https://wa.me/555192977465" target="_blank" rel="noopener noreferrer"> 
          <i className="fa fa-whatsapp fa-4x icon-3d" alt="Whatsapp"></i>
        </a>

      </div>{/*flex-center*/}
        <div className='Pleno'>"PLENUS" - de origem latina, que significa “pleno”, que está completo.</div>
    </div>
  );
}

export default App;
