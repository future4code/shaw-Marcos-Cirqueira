import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './components/CardGrande/img/eu.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Icon from './components/CardPequeno/icon/o-email.png';
import Icon2 from './components/CardPequeno/icon/endereco-residencial.png';
import CardAcademico from './components/CardAcademico/CardAcademico';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Marcos V" 
          descricao="Oi, eu sou o Marcos. Sou estudante da Labenu. Nas horas livres gosto de jogar video-game e gosto de praticar musculação. "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
        imagem={Icon}
        nome="Email:"
        descricao="labenucode@gmail.com"        
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
        imagem={Icon2}
        nome="Endereço:"
        descricao="Rua Labenu"        
        />
      </div>


      <div className="page-section-container">
      <h2>Formações Academicas</h2>
      <CardAcademico 
        imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png"
        nome="Labenu"
        descricao="Estudante Full Stack"        
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
