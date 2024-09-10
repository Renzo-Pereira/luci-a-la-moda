import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <article className="contacto">
        <div>
          <h2>¿Quienes somos?</h2>
          <p>
            Somos emprendedores Uruguayos con mas de 12 años de experiencia en
            comercio exterior (Impo & Expo) Manejamos nuestro stock desde Miami
            donde se encuentra nuestro deposito. De esta manera reducimos los
            costos logísticos.
          </p>
        </div>
        <div className="redes">
        <h4>
        <a href="https://www.facebook.com/profile.php?id=61563661704682" aria-label="Enlace a Facebook de Lucí a la moda">
            <i className="bi bi-facebook"></i>
            <p>Luci a la moda</p>
          </a>
        </h4>

        <h4>
        <a href="https://wa.me/+59898851009/?text=Hola! Queria hacerte una consulta..." aria-label="Enlace a WhatsApp de Lucí a la moda">
            <i className="bi bi-whatsapp"></i>
            <p>+598 98 851 009</p>
          </a>
        </h4>

        <h4>
        <a href="https://www.instagram.com/luci_a_la_moda/" aria-label="Enlace a Instagram de Lucí a la moda">
            <i className="bi bi-instagram"></i>
            <p>@luci_a_la_moda</p>
          </a>
        </h4>
        </div>
      </article>
      <article className="info">
        <div>
          <h2>¿Como comprar?</h2>
          <p>
            Selecciona el modelo que mas te guste, confirma el talle con
            nosotros mediante Instagram o Whatsapp. Despachamos desde Miami y en
            7-10 dias te lo entregamos en tu domicilio.
          </p>
        </div>
        <div>
          <h2>Formas de pago</h2>
          <p>
            Transferencia bancaria (BROU, ITAU, SANTANDER)
            Mercadopago (QR) No es necesario señar o pagar por adelantado.
          </p>
        </div>
      </article>
      <article className="logotipo">
        <h2>Lucí a la moda</h2>
        <img src={logo} alt="logo" />
      </article>
    </footer>
  );
};

export default Footer;
