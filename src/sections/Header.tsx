import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

type NavLinkProps = {
  title: string;
  url: string;
};

const NavLink = ({ title, url }: NavLinkProps) => (
  <LinkScroll
    to={url}
    className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src="/images/xora.svg" alt="logo" width="115" height="55" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" url="features" />
                  <div className="dot" />
                  <NavLink title="pricing" url="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "cursor-pointer transition-transform duration-500 max-lg:hidden",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" url="faq" />
                  <div className="dot" />
                  <NavLink title="download" url="download" />
                </li>
              </ul>
            </nav>
            <div className="absolute left-0 top-1/2 block h-[380px] w-[960px] -translate-y-1/2 translate-x-[-290px] rotate-90 lg:hidden">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                className="relative z-2"
                width={960}
                height={380}
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
                width={960}
                height={380}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 lg:hidden"
        >
          <img
            src={isOpen ? "/images/close.svg" : "/images/magic.svg"}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
