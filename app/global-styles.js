import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .bg-light {
    background-color: rgb(22, 21, 20) !important;
  }

  .navbar-light, .navbar-brand {
    height: 44px;
  }

  .navbar-brand {
    position: relative;
    color: white !important;
    margin-left: 20px;
    font-size: 16px;
    top:3px !important;
  }
  .nav-item:nth-child(2) {
    display: flex;
    gap: 20px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 9rem;
    margin-top: -3px;
  }

  .nav-item, .nav-link:nth-child(2) {
    display: flex;
    gap: 5px;
  }

  .navbar-light .navbar-nav .nav-link {
    color: white !important;
    font-size: 11.5px;
    font-weight: 200;
    position: relative;
  }

  .nav-top {
    top:3px !important;
    left: 142px;

  }

  .nav-btn {
    top: -3px !important;
    color:  rgb(22, 21, 20) ;
    text-decoration: none;

  }

  .btn, .btn:hover {
    color: transparent;
    background-color: white;
  }

  .nav-tabs .nav-link.active {
    color: #96979c !important;
    background: 0 0;
    line-height: 0;
    padding: 12px 15px;
    color: #96979c;
    background: 0 0;
    font-size: 11.5px;
  }

  .table{
    width: 100%;
    padding-left: 18px;
  }

  .table > :not(:last-child) > :last-child > * {
    color: #96979c;
    font-size: 13px;
  }

  /* th:nth-child(0) {
    color: red !important;
    left: 20px !important;
  }

  td:nth-child(4) {
    color: red !important;
  } */

`;

export default GlobalStyle;
