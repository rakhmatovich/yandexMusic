import React from "react";
import "./LoginStyle.css";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <form>
          <h3><p>Yandex<img className="id" src="/images/id.webp" alt="" /></p><a href="https://ya.ru/"></a><p> Остался один шаг до Музыки</p></h3>
          <input className="email" type="email" id="email" placeholder="Email id 📧" required />
          <input
            type="text"
            id="phone"
            placeholder="Phone number 📞"
            required
            
          />
          <button className="voyti" type="submit">Voyti</button>
          <button className="butty" type="submit">sozdat id</button>
          <div className="voytispomosh">voyti s help</div>
          <div className="imges">
      <img className="gugl" src="/images/WK.png" alt="" />
      <img className="gugl" src="/images/gugl.webp" alt="" />
      <a className="qra"><img className="qr" src="/images/qr.webp" alt="" />QR code</a>
      <img className="gugl" src="/images/feysbuk.webp" alt="" />
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
