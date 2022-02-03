import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    const [banner, setBanner] = useState({
        banner1: {
          img: "https://kapee.presslayouts.com/wp-content/uploads/revslider/catalog/catalog-slider-1.jpg",
          title: "NEW ARRIVALS",
          subTitle: "SUMMER SALE",
          desc: "MIN.40% OFF",
        },
        banner2: {
          img: "https://kapee.presslayouts.com/wp-content/uploads/revslider/catalog/catalog-slider-2.jpg",
          title: "NEW Collections 2022",
          subTitle: "Men's Fasion",
          p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, maiores obcaecati facilis natus quisquam beatae!",
        },
        banner3: {
          img: "https://kapee.presslayouts.com/wp-content/uploads/revslider/catalog/catalog-slider-3.jpg",
          title: "Festive Feast",
          subTitle: "Fasion Accessories",
          desc: "MIN.40% OFF",
        },
      });
      const [topBottomBanner, setTopBottomBanner] = useState({
        top: {
          img: "https://kapee.presslayouts.com/wp-content/uploads/2019/06/catalog-banner-1.jpg",
          title: "White sneakers",
          subTitle: "min.30% off",
          desc: "Man fasionable shoe",
          route: "/shop/shoes",
        },
        bottom: {
          img: "https://kapee.presslayouts.com/wp-content/uploads/2019/06/catalog-banner-2.jpg",
          title: "women's fasion",
          subTitle: "up to 65% off",
          desc: "shows & backpacs",
          route: "/shop/backpacks",
        },
      });

    return (
        <Container fluid>
            <Banner banner={banner} topBottomBanner={topBottomBanner}/>
        </Container>
    );
};

export default Home;