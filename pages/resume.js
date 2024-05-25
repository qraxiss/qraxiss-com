import About from "../src/components/About";
import { DefaultPageBanner } from "../src/components/PageBanner";
import ResumeSection from "../src/components/ResumeSection";
import Service from "../src/components/Service";
import {
  CodingSkills,
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
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
      <DesignSkills />
      <LanguagesSkills />
      <CodingSkills />
      <KnowledgeSkills />
    </Layout>
  );
};
export default Resume;
