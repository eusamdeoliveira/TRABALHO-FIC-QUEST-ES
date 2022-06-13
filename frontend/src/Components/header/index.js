import { Component } from "react"
// import react { component } from 'react'
// import Img from 'react-image'


class Header extends Component {
    render(){
        return(
            <>
            {/* <!-- BARRA DE NAVEGAÇÃO  --> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#"> */}
      <img src="../img/Logo/logo.png" class="img-fluid" width="120px" />
    {/* </a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Início</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cursos.html">Cursos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cadastro.html">Inscrição</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Entrar
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="loginAluno.html">Aluno</a></li>
            <li><a class="dropdown-item" href="loginAluno.html">Professor</a></li>
            <li><a class="dropdown-item" href="loginAluno.html">Coordenação</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="O que você procura?" aria-label="search"/>
        <button class="btn btn-outline-success">Buscar</button>
      </div>
    </div>
  </div>
</nav>

            </>

        )
    }
}

export default Header