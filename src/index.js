import React from 'react';
import ReactDOM from 'react-dom';


import './Styles/index.css';

import reportWebVitals from './reportWebVitals';
import QuangCaoSanPham from './Components/QuangCaoSanPham';
import DanhMucSanPham from './Components/DanhMucSanPham';

ReactDOM.render(
  <React.StrictMode>
    <QuangCaoSanPham/>
  </React.StrictMode>,
  document.getElementById('QuangCaoSanPham')
)


ReactDOM.render(
  <React.StrictMode>
    <DanhMucSanPham />
  </React.StrictMode>,
  document.getElementById('DanhMucSanPham')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
