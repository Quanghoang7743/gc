
import { Carousel } from "antd";
import Image from '../../assets/458381363_1075912897870495_1098989865986192058_n.jpg'




export default function CarouselTwo() {
  return (
    <Carousel arrows dotPosition="left" infinite={false} className="">
      <div>
        <img className="h-[400px] w-[100%] object-cover" src={Image} alt="" />
      </div>
      <div>
        <img className="h-[400px] w-[100%] object-cover" src={Image} alt="" />
      </div>
      <div>
        <img className="h-[400px] w-[100%] object-cover"  src={Image} alt="" />
      </div>
      <div>
        <img className="h-[400px] w-[100%] object-cover" src={Image} alt="" />
      </div>
    </Carousel>
  );
}
