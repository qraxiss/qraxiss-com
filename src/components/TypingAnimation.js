import { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData
        ? typingData
        : [
            "I'm <strong>qraxiss</strong>",
            "I love <strong>reactjs</strong>",
            "I hate <strong>nextjs</strong>",
            "I love <strong>nodejs</strong>",
            "I love <strong>strapi</strong>",
            "I love <strong>express</strong>",
            "I love <strong>devops</strong>",
            "I love <strong>web3</strong>",
          ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};
export default TypingAnimation;
