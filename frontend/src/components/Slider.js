import Carousel from 'react-bootstrap/Carousel'
import BacktoTheFuture from '../assets/images/SliderPoster/Backtothefuture.jpg'
import BatmanImages from '../assets/images/SliderPoster/batman.jpg'
import DuneImages from '../assets/images/SliderPoster/Dune.jpg'
import PasificImages from '../assets/images/SliderPoster/PasificRim.jpg'
import PikachuImages from '../assets/images/SliderPoster/Pikachu.jpg'
import SpidermanImages from '../assets/images/SliderPoster/Spiderman.jpg'
import StarwarsImages from '../assets/images/SliderPoster/Starwars.jpg'
import VenomImages from '../assets/images/SliderPoster/Venom.jpg'
import '../style/Slider.css'


const Slider = () => {
    const SliderList = [
        {
            src : BacktoTheFuture,
            alt : "first slide",
            title : "BACK TO THE FUTURE",
            desc : "Watch the First Trailer",
        },
        {
            src : BatmanImages,
            alt : "Second slide",
            title : "BATMAN",
            desc : "Watch the First Trailer",
        },
        {
            src : DuneImages,
            alt : "Thirdth slide",
            title : "DUNE",
            desc : "Watch the First Trailer",
        },
        {
            src : PasificImages,
            alt : "fourth slide",
            title : "PASIFIC",
            desc : "Watch the First Trailer",
        },
        {
            src : PikachuImages,
            alt : "Fifth slide",
            title : "PIKACHU",
            desc : "Watch the First Trailer",
        },
        {
            src : SpidermanImages,
            alt : "Sixth slide",
            title : "SPIDERMAN",
            desc : "Watch the First Trailer",
        },
        {
            src : StarwarsImages,
            alt : "Seventh slide",
            title : "STAR WARS",
            desc : "Watch the First Trailer",
        },
        {
            src : VenomImages,
            alt : "Last slide",
            title : "VENOM",
            desc : "Watch the First Trailer",
        },
    ]
    return (
        <Carousel variant="white">
        {SliderList.map((result, index) => {
            return (
                <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={result.src}
                  alt={result.alt}
                />
                <Carousel.Caption>
                  <h1 className='text-white shadow-sm fw-bold title_carousel'>{result.title}</h1>
                  <p className='text-white-50 desc_carousel'>{result.desc}</p>
                  </Carousel.Caption>
              </Carousel.Item>
            )})}
      </Carousel>
    )
} 

export default Slider