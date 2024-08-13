import { AnchorBtn } from "./anchor-button.component";

export const Header = () => {
  return (
    <header className="w-full h-16 p-2 flex items-center justify-center lg:justify-evenly lg:gap-4 bg-transparent shadow-sm shadow-[#ffffff] fixed top-0 z-20">
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
