const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/qraxiss/qraxiss-com"
        >
          <span className="icon fab fa-github" />
          <strong>source codes</strong>
        </a>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://github.com/qraxiss">
            <span className="icon fab fa-github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/qraxiss"
          >
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://qraxiss.medium.com">
            <span className="icon fab fa-medium" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.com/users/17497486/qraxiss"
          >
            <span className="icon fab fa-stack-overflow" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.kaggle.com/qraxiss"
          >
            <span className="icon fab fa-kaggle" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.x.com/qraxiss">
            <span className="icon fab fa-twitter" />
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
