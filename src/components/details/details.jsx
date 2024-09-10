import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Details = () => {
  const { slug } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setProducto({ ...doc.data(), id: doc.id });
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      }
    };

    fetchProduct();
  }, [slug]);

  return (
    <main>
      {producto && (
        <article className="details">
          <div className="mini">
            <img
              src={producto.img}
              alt={`Imagen principal de ${producto.nombre}`}
            />
            <img
              src={producto.img1}
              alt={`Imagen secundaria de ${producto.nombre}`}
            />
            <img
              src={producto.img2}
              alt={`Imagen terciaria de ${producto.nombre}`}
            />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoHeight={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img
                src={producto.img}
                alt={`Imagen principal de ${producto.nombre}`}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={producto.img1}
                alt={`Imagen secundaria de ${producto.nombre}`}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={producto.img2}
                alt={`Imagen terciaria de ${producto.nombre}`}
                loading="lazy"
              />
            </SwiperSlide>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <div className="swiper-pagination"></div>
          </Swiper>
          <div>
            <h4 className="marca-details">{producto.marca}</h4>
            <h3 className="name-details">{producto.nombre}</h3>
            <h4 className="price-details">${producto.precio}</h4>
            <h5>Descripción</h5>
            <p className="text-details">{producto.descripcion}</p>
          </div>
        </article>
      )}
    </main>
  );
};

export default Details;
