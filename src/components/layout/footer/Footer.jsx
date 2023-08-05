import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerC">
      <div className="containerFooter">
        <div className="footer-content">
          <div className="footer-info">
            <h3>LianShop</h3>
            <p>Teléfono: XXX-XXX-XXXX</p>
            <p>Correo: info@tiendaropa.com</p>
            <p>Dirección de la tienda:</p>
            <p>Calle Falsa, Nº 123</p>
            <p>Buenos Aires, Argentina</p>
          </div>
          <div className="footer-social">
            <h3>Síguenos en redes:</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
