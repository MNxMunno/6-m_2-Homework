import "./Articles.scss";
import { articles1 } from "../../../assets";
import { articles2 } from "../../../assets";

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="line"></div>
        <div className="cards1">
          <h1>Articles & resources</h1>
          <div className="btns">
            <a href="#" className="btn">
              Get a free quote
            </a>
            <a href="#" className="btn">
              Browse articles
            </a>
          </div>
        </div>
        <div className="cards2">
          <div className="card ">
            <div className="img">
              <img src={articles1} alt="img" />
            </div>
            <div className="child-card ">
              <h2>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h2>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="date">
                <p>Jan 28, 2022</p>
                <div className="blue"></div>
              </div>
            </div>
          </div>
          <div className="card cardcha">
            <div className="img">
              <img src={articles2} alt="img" />
            </div>
            <div className="child-card">
              <h2>
                How to properly disinfect your phone and other electronics
              </h2>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="date">
                <p>Feb 1, 2022</p>
                <div className="blue"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
