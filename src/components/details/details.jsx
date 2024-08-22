import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";

const Details = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return (
    <main>
      {item && (
        <article className="details">
          <img src={item.img} alt={item.nombre} />
          <div>
            <h4 className="marca-details">{item.marca}</h4>
            <h3 className="name-details">{item.nombre}</h3>
            <h4 className="price-details">${item.precio}</h4>
            <h5>Descripción</h5>
            <p className="text-details">{item.descripcion}</p>
          </div>
        </article>
      )}
    </main>
  );
};

export default Details;
