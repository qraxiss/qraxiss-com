const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: info@qraxiss.com</p>
        {/* <p>T: +1 (234) 567 80 98</p> */}
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.x.com/qraxiss">
            <span className="icon fab fa-twitter" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/qraxiss"
          >
            <span className="icon fab fa-instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/qraxiss"
          >
            <span className="icon fab fa-linkedin" />
          </a>

          <a target="_blank" rel="noreferrer" href="https://github.com/qraxiss">
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/qraxiss">
            <span className="icon fab fa-telegram" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
