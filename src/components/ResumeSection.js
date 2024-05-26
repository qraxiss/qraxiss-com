const kapsul = {
  link: "https://www.linkedin.com/company/kapsul-teknoloji-platformu/",
  name: "Kapsül Technology Platform",
};

const shopcek = {
  link: "https://www.linkedin.com/company/shopcek",
  name: "Shopcek",
};

const experiences = [
  {
    company: shopcek,
    date: "Nov 2023 - Present, 7 mos",
    title: "Full Stack Core Developer",
    description:
      "Led the development of full stack solutions, ensuring optimal performance and user experience.",
  },
  {
    company: shopcek,
    date: "Sep 2022 - Nov 2022, 3 mos",
    title: "Backend Developer",
    description:
      "Developed and maintained server-side logic, ensuring high performance and responsiveness.",
  },
  {
    company: kapsul,
    date: "Jun 2023 - May 2023, 4 mos",
    title: "Full Stack Core Developer",
    description:
      "Led the development of full stack solutions, ensuring optimal performance and user experience.",
  },
  {
    company: kapsul,
    date: "Jan 2023 - Jun 2023, 6 mos",
    title: "Backend Developer",
    description:
      "Developed and maintained server-side logic, ensuring high performance and responsiveness.",
  },
  {
    company: kapsul,
    date: "May 2022 - Jan 2023, 9 mos",
    title: "Data Scientist",
    description:
      "Analyzed and interpreted complex data to help inform business decisions and strategies.",
  },
];

const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          {/* title */}
          <div className="title">
            <div className="title_inner">Experience</div>
          </div>
          {/* resume items */}
          <div className="resume-items">
            {experiences.map(({ description, company, date, title }, index) => (
              <div
                className={`resume-item content-box ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="date">{date}</div>
                <div className="name">
                  {title} <br />
                  <a href={company.link} target="_blank">
                    {company.name}
                  </a>
                </div>
                <div className="text">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
