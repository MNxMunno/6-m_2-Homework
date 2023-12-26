import "./Services.scss";
import { our1 } from "../../../assets";
import { our2 } from "../../../assets";
import { our3 } from "../../../assets";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-cards1">
          <div className="card">
            <h4>Our Services</h4>
          </div>
          <div className="card">
            <a className="btn" href="#">
              Explore services
            </a>
          </div>
        </div>
        <div className="services-cards2">
          <div className="card">
            <div className="img">
              <img src={our1} alt="img" />
            </div>
            <h5>House cleaning</h5>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="card">
            <div className="img">
              <img src={our2} alt="img" />
            </div>
            <h5>Office cleaning</h5>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="card">
            <div className="img">
              <img src={our3} alt="img" />
            </div>
            <h5>Industrial cleaning</h5>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
