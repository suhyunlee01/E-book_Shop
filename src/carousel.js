import Carousel from 'react-bootstrap/Carousel';
import BannerImg from './BannerImg';

function Carousels(props) {

  let {url1, url2, url3} = props;

  return (
    <Carousel className='carouselBackground'>
      <Carousel.Item>
        <BannerImg bgurl={url1}/>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImg bgurl={url2}/>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImg bgurl={url3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;