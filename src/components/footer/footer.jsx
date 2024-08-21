import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <article className="contacto">
        <h4>
          <a href="https://www.facebook.com/profile.php?id=61563661704682">
            <i className="bi bi-facebook"></i>
            <p>Luci a la moda</p>
          </a>
        </h4>

        <h4>
          <a href="https://wa.me/+59898851009/?text=Hola! Queria hacerte una consulta...">
            <i className="bi bi-whatsapp"></i>
            <p>+598 98 851 009</p>
          </a>
        </h4>

        <h4>
          <a href="https://www.instagram.com/luci_a_la_moda/">
            <i className="bi bi-instagram"></i>
            <p>@luci_a_la_moda</p>
          </a>
        </h4>
      </article>
      <article className="info">
        <h2>¿Como comprar?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta
          et iste dolorem ex enim vero illo laborum consequuntur animi, aperiam
          odit, adipisci molestias? A recusandae necessitatibus officia quaerat
          molestiae quis laboriosam mollitia nostrum impedit similique quos quod
          blanditiis doloremque, hic deleniti unde? Natus doloribus animi
          perferendis illo repellendus voluptas veritatis eius cupiditate libero
          quos maiores a quidem officia sed delectus, nostrum eaque ratione.
          Recusandae ea, ratione ipsam nulla debitis voluptas, assumenda, eaque
          tenetur minima sint facere laboriosam ipsa? Tempora soluta ducimus
          repellendus quibusdam, deleniti vitae, inventore itaque, deserunt ex
          id aspernatur! Molestiae dolorum quia repellendus quisquam distinctio,
          vitae consectetur?
        </p>
      </article>
      <article className="logotipo">
        <h2>Lucí a la moda</h2>
        <img src={logo} alt="logo" />
      </article>
    </footer>
  );
};

export default Footer;
