import "./About.scss";
import { about1 } from "../../../assets";
import { about2 } from "../../../assets";
import { about3 } from "../../../assets";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
          <div className="cards">
            <div className="card">
              <div className="img">
                <img src={about1} alt="" />
              </div>
              <h3>1. Schedule online</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="card">
              <div className="img">
                <img src={about2} alt="" />
              </div>
              <h3>2. Pay online easily</h3>
              <p>
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="card">
              <div className="img">
                <img src={about3} alt="" />
              </div>
              <h3>3. Get your house cleaned</h3>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>

          <div className="btns">
            <a href="#" className="btn">
              Get a free quote
            </a>
            <a href="#" className="btn">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
