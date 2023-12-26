import "./Hero.scss";
import { hero, call } from "../../../assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-cards">
          <div className="card">
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <span>
              <a className="btn" href="#">
                Get a free quote
              </a>
              <span className="call-style">
                <img src={call} alt="call" />
                <div className="texts">
                  <p>Call us now</p>
                  <p className="tel">(414) 567 - 2109</p>
                </div>
              </span>
            </span>
          </div>
          <div className="card-img">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
