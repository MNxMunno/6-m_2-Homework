import "./Follow.scss";
import { follow } from "../../../assets";
import { call } from "../../../assets";

const Follow = () => {
  return (
    <section className="follow">
      <div className="container">
        <div className="cards">
          <div className="card img">
            <img src={follow} alt="" />
          </div>
          <div className="card card2">
            <p className="covid">Covid-19 sanitization</p>
            <h6>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h6>
            <p className="lobortis">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
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
        </div>
      </div>
    </section>
  );
};

export default Follow;
