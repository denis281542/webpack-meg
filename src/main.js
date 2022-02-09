import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { store } from './store';
import App from './App'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './components/Home/Home.jsx'; 
import { Order } from './routes/Order/Order.jsx'
import { Group } from './routes/Group/Group.jsx'
import { Login } from './routes/Auth/Login.jsx'
import { Register } from './routes/Auth/Register.jsx'
import { Account } from './routes/Auth/Account.jsx'
import './firebase/firebase'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="group" element={<Group />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('app')
)



// import '../../styles/order.css'


/* Path css/js to items */
// const patHome = () => {
//   if(window.location.pathname === "/") {
//     require('./style.css') 
//     // require('./nav/menu-nav') 
//     require('./footer.js') 
//     require('./modal-window.js') 
//     require('@fortawesome/fontawesome-free/css/all.min.css') 
//     require('./touch-slider/touch-slider.js') 
//     require('./ymaps/ya-maps.js') 
//     // require('./animation//animation')
//     // require('./animation/animation.css') 
//     require('./items/items')
//     require('./showFullLink/showLinkFull')
//     require('./lazyLoadImg')
//     require('./scroll-load')
//     require('./items/fullScreenImg') 
//     require('./loader/loader') 
//     require('./loader/lazy-loading-img') 
//   }
//   return
// }
// patHome()

// const pathOrder = () => {
//   if(window.location.pathname === "/order.html") {
//     require('./order/order')
//     // require('./order.css')
//     require('./nav/menu-nav') 
//     require('./footer.js')
//     require('./modal-window.js')
//     // require('./order.js')
//     require('./order/orderTab')
//     require('./order/table')
//   }
// } 
// // pathOrder()

// const pathGroup = () => {
//   if(window.location.pathname === "/group.html") {
//     require('./group/group')
//     require('./footer')
//   }
// } 
// pathGroup()

