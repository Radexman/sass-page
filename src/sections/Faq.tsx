import { Element } from "react-scroll";
import { FAQ } from "../constants";
import FaqItem from "../components/FaqItem";

const Faq = () => {
  const halfLength = Math.floor(FAQ.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 mb-7 max-w-640 text-p4 max-lg:max-w-md">
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            <p className="body1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2" />
        </div>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" className="size-1/2" alt="logo" />
            </div>
            <div className="relative flex-1 pt-24">
              {FAQ.slice(0, halfLength).map((singleFaq, index) => (
                <FaqItem
                  key={singleFaq.id}
                  singleFaq={singleFaq}
                  index={index}
                />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {FAQ.slice(halfLength).map((singleFaq, index) => (
                <FaqItem
                  key={singleFaq.id}
                  singleFaq={singleFaq}
                  index={halfLength + index}
                />
              ))}
            </div>
          </div>
          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
