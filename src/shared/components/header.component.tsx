import { useState, useEffect } from "react";

import { AnchorBtn } from "./anchor-button.component";

export const Header = () => {
  const scrollDir = useScrollDirection();

  return (
    <header
      className={`w-full h-16 p-2 flex items-center justify-center lg:justify-evenly lg:gap-4 bg-transparent shadow-sm shadow-[#ffffff] fixed ${
        scrollDir === "down" ? "-top-16" : "top-0"
      } z-20 transition-all duration-150`}
    >
      <ul className="hidden lg:flex gap-10 items-center justify-between w-[25%]">
        <li>
          <a href="#quartos" className="lora-thin text-white">
            Quartos
          </a>
        </li>
        <li>
          <a href="#restaurante" className="lora-thin text-white">
            Restaurante
          </a>
        </li>
        <li>
          <a href="#serviço" className="lora-thin text-white">
            Serviço
          </a>
        </li>
      </ul>
      <h1 className="text-3xl lg:text-2xl lg:w-2/3 text-white lora-bold-italic text-nowrap text-center lg:translate-x-16">
        Ágata Hotel
      </h1>

      <div className="hidden lg:flex lg:w-[50%] items-center justify-end">
        <AnchorBtn text="Reservar" href="https://wa.me/5531999999999" />
      </div>
    </header>
  );
};

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
