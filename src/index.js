import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import { ProductPage } from './pages/product/product';

const element = <div className="footer">
    <div className='footer__conteiner'>
        <div className='logo'>
            <p>logo</p>
        </div>
        <div className='search'>
            <p>search</p>
        </div>
    </div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/* <ProductPage /> */}
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

