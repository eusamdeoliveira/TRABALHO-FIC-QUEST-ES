import React, { Component } from 'react';
// import react { component } from 'react'

import Header from '../../Components/header'
import Footer from '../../Components/footer'


class Home extends Component {
    render(){
        return(
            <>
                <Header />

                {/* <!-- -------------------------------------------------------------------//-------------------------------------------------------------------  --> */}

{/* <!-- CONTEÚDO  --> */}

<div class="container col-xxl-8 px-4 py-5" >
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src="img/Pg Inicial/ImagemInicial.png" class="d-block mx-lg-auto img-fluid" alt="Imagens" width="900" height="700" loading="lazy"/>
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3">Titulo</h1>
      <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptate nihil mollitia fuga ad eligendi animi dolore laborum, qui adipisci dolores suscipit, alias, repellat id officia tenetur voluptates eaque eius!</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Conheça nossos Cursos</button>
      </div>
    </div>
  </div>
</div>


<div>
  <div class="Box">
    <div class="Box1">
      <img src="img/Pg Inicial/ImagemBox1.png" alt="imgBox1" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia voluptatum beatae non temporibus,
        explicabo placeat officia maiores esse expedita ad impedit velit doloribus, dignissimos vel recusandae
        provident laboriosam ipsa!</p>
    </div>

    <div class="Box2">
      <img src="img/Pg Inicial/ImagemBox2.png" alt="imgBox2" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia voluptatum beatae non temporibus,
        explicabo placeat officia maiores esse expedita ad impedit velit doloribus, dignissimos vel recusandae
        provident laboriosam ipsa!</p>
    </div>

    <div class="Box3">
      <img src="img/Pg Inicial/ImagemBox3.png" alt="imgBox3" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia voluptatum beatae non temporibus,
        explicabo placeat officia maiores esse expedita ad impedit velit doloribus, dignissimos vel recusandae
        provident laboriosam ipsa!</p>
    </div>
  </div>

</div>


            <Footer />
            </>
        )
        }
}

export default Home;
