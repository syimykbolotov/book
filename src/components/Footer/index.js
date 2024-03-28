import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <h1>BOOKShop</h1>
          <div className="footer--nav">
            <a href="#">Способ оплаты</a>
            <a href="#">Условия доставки</a>
            <a href="#">Правила покупки</a>
          </div>
          <div className="footer--FAQ">
            <a href="#">FAQ</a>
            <a href="#">О нас</a>
          </div>
          <div className="footer--contacts">
            <h2>Связаться с нами:</h2>
            <a href="tel: +996">+996707070707</a>
            <a href="tel: +996">+996555555555</a>
            <a href="tel: +996">+996505050505</a>
            <div className="site flex gap-3 text-2xl">
              <FaInstagramSquare />
              <FaTelegram />
              <FaWhatsappSquare />
              <AiFillFacebook />
            </div>
          </div>
          <div className="footer--addres">
            <h2>Адрес</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in
              dolor viverra feugiat neque, sed in. Mattis volutpat malesuada
              velit parturient aliquam, est. Mauris vitae velit laoreet faucibus
              nec amet velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
