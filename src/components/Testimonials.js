import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const data = [
  {
    profile: "images/rev1.jpg",
    name: "Evren İ.",
    comment: `Kendisi yazılım konusunda çok bilgili. Bilmediği konuları
  bile araştırıp mutlaka bir şekilde çözüm üretiyor. Proje
  bittikten sonra bile her türlü desteği veriyor. Gözünüz
  kapalı çalışabilirsiniz.`,
    type: "Freelance Customer",
  },

  {
    profile: "images/rev1.jpg",
    name: "Batuhan B.",
    comment: `Ben kripto para ticareti yapıyorum, bir bota ihtiyacım
    vardı, Mehmet ihtiyacım olan botu en iyi şekilde yaptı
    sağolsun. Alanında uzman , gönül rahatlığıyla
    güvenebilirsiniz . Saygılar`,
    type: "Freelance Customer",
  },

  {
    profile: "images/rev1.jpg",
    name: "Emrah V.",
    comment: `Gayet başarılı ve insanlarla iyi diyalog kurabilen yardımcı bir kişiliği var tavsiye ederim. Memnun kaldım.`,
    type: "Freelance Customer",
  },

  {
    profile: "images/rev1.jpg",
    name: "Ahmet Ö.",
    comment: `Genç Olmasına Rağmen Mükemmel Derecede Bir Düşünme Yeteneği Var Proje İçin Teşekkür ederim 😊`,
    type: "Freelance Customer",
  },
];

const Testimonials = () => {
  const props = {
    loop: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  };
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Testimonials</div>
        </div>
        {/* testimonials items */}
        <div className="reviews-carousel">
          <Swiper {...props} className="swiper-container">
            <div className="swiper-wrapper">
              {data.map(({ name, type, comment, profile }, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="reviews-item content-box">
                    <div className="image">
                      <img src={profile} alt="" />
                    </div>
                    <div className="info">
                      <div className="name">{name}</div>
                      <div className="company">{type}</div>
                    </div>
                    <div className="text">{comment}</div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {/* navigation */}
          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
