import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <main>
      {productos.map((prod) => (
        <article>
          <img key={prod.nombre} src={prod.img} alt={prod.nombre} />
          <h3>{prod.nombre}</h3>
          <h4>${prod.precio}</h4>
        </article>
      ))}
    </main>
  );
};

export default Products;
