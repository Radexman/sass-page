import { Ios, Android, Web, Windows } from "../icons/icons";
import { Element } from "react-scroll";
import { LINKS } from "../constants";
import Marker from "../components/Marker";

const Download = () => {
  const icons: Record<"Ios" | "Android" | "Web" | "Windows", JSX.Element> = {
    Ios: <Ios />,
    Android: <Android />,
    Web: <Web />,
    Windows: <Windows />,
  };

  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {LINKS.map(({ id, title, url }) => {
                  const downloadIcon = icons[title as keyof typeof icons];
                  return (
                    <li
                      key={id}
                      className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    >
                      <a
                        href={url}
                        className="download_tech-icon_before relative flex size-22 items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src={"/images/lines.svg"}
                          className="absolute size-13/20 object-contain"
                          alt="lines"
                        />
                        <span className="download_tech-icon">
                          {downloadIcon}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after relative w-[955px] rounded-40 border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
