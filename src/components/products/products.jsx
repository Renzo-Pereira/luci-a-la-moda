import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const genero = useParams().genero;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    let q = genero
      ? query(productosRef, where("genero", "==", genero))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [genero]);

  return (
    <main>
      {productos.map((prod) => (
        <article>
          <Link to={`/details/${prod.id}`}>
            <img key={prod.nombre} src={prod.img} alt={prod.nombre} />
            <h4 className="marca">{prod.marca}</h4>
            <h3>{prod.nombre}</h3>
            <h4>${prod.precio}</h4>
          </Link>
        </article>
      ))}
      <a
        href="https://wa.me/+59898851009/?text=Hola! Queria hacerte una consulta..."
        className="botonWhatsapp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </main>
  );
};

export default Products;
