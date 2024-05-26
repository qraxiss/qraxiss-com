import Image from "next/image";

const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFmgSF5ZRunKA/profile-displayphoto-shrink_800_800/0/1707221387361?e=1722470400&v=beta&t=MxhEgWc7sUMfdQmJ4LMVC7xiY9tuGZyEuafUFcGrBOU"
            alt=""
          />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            I am studying 3rd year Computer Engineering at Konya Technical
            University. Since I have a very high curiosity about computer
            science, I like to challenge myself as long as it involves computer
            engineering. This improves me every day.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 23
              </li>
              <li>
                <strong>Residence:</strong> Turkey
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Istanbul
              </li>
              <li>
                <strong>Telegram:</strong>{" "}
                <a href="https://t.me/qraxiss" target="_blank">
                  @qraxiss
                </a>
              </li>
              <li>
                <strong>E-mail:</strong> info@qraxiss.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a
              href="assets/qraxiss-resume.pdf"
              target="_blank"
              className="btn hover-animated"
            >
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
