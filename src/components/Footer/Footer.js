import React from "react";
import './footer.scss'
import { logoFooter } from '../../assets/images/img-prod/img'

export const Footer = () => {
  return(<>      
    <footer className="footer">
      <div className="footer__inner">
        <img className="footer__logo" src={logoFooter} alt="Мегалэдн Логотип" />
        <div className="footer__description">
          © Холдинг «Мегаполис», 2009 — 2020 <br />
          Условия договора публичной оферты (конфиденциальность и защита персональной информации) <br/>
          Правила посещения <br />
          <a className="footer__feedback"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZeZB3l5mQOsdub03OTQLdSbJrUmEC_vcwYPqriPslgL4tg/viewform?entry.632640978=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB"
            target="_blank"
          >Оставить отзыв</a>
        </div>
      </div>
    </footer>
  </>)
}