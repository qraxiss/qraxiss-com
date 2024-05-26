import About from "../src/components/About";
import { DefaultPageBanner } from "../src/components/PageBanner";
import ResumeSection from "../src/components/ResumeSection";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
const Resume = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Resume"} typingData={typingAnimation} />
      <About />
      <Testimonials />
      <ResumeSection />
    </Layout>
  );
};
export default Resume;
