import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footerTexto">
          <h1>Fale conosco:</h1>
          <p>telefone: +55 (11) 12345-6789</p>
          <p>e-mail: suporteaocliente@mentis.com.br</p>
          <p>fax: (11) 123456789</p>
        </div>
        <div className="footerImagens">
          <img src="facebook.svg" alt="Facebook" />
          <img src="instagram.svg" alt="Instagram" />
          <img src="twitter.svg" alt="Twitter" />
          <img src="linkedin.svg" alt="LinkedIn" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
