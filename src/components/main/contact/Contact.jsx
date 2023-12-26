import "./Contact.scss";
import { call } from "../../../assets";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="cards">
          <div className="card">
            <h1>Contact Us</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="call">
              <img src={call} alt="call" />
              <div className="texts">
                <p>Call us now</p>
                <b>(414) 567 - 2109</b>
              </div>
            </div>
            <div className="line"></div>

            <h2>Not convinced yet?</h2>
            <p className="text">
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <a href="#" className="btn">
              Browse our packages
            </a>
          </div>
          <div className="card2">
            <form>
              <div className="form">
                <label htmlFor="name">Full name</label>
                <input required type="text" name="name" id="name" />
              </div>
              <div className="form">
                <label htmlFor="tel">Phone number</label>
                <input required type="tel" name="tel" id="tel" />
              </div>
              <div className="form">
                <label htmlFor="adres">Address</label>
                <input required type="address" name="adres" id="adres" />
              </div>
              <div className="form">
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email" />
              </div>
              <div className="form">
                <label htmlFor="service">Requested service</label>
                <input required type="text" name="services" id="services" />
              </div>
              <div className="form">
                <label htmlFor="day">Day of service</label>
                <input required type="text" name="day" id="day" />
              </div>
              <div className="form">
                <label htmlFor="note">Add a note</label>
                <textarea
                  required
                  readOnly
                  name="note"
                  id="note"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit">Submit message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
