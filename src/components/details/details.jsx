import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          <div className="mini">
            <img src={item.img} alt={item.nombre} />
            <img src={item.img1} alt={item.nombre} />
            <img src={item.img2} alt={item.nombre} />
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
              <img src={item.img} alt={item.nombre} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img1} alt={item.nombre} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img2} alt={item.nombre} />
            </SwiperSlide>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <div className="swiper-pagination"></div>
          </Swiper>
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
