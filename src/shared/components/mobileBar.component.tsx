export const MobileBar = () => {
  return (
    <nav className="fixed bottom-0 w-full h-12 lg:hidden bg-slate-200 grid place-items-center">
      <ul className="flex items-center justify-evenly w-full h-full">
        <li className="lora-thin w-1/12 grid place-items-center">
          <a href="#quartos">
            <i className="fa-solid fa-bed"></i>
          </a>
        </li>
        <li className="w-8/12 h-full bg-slate-900 grid place-items-center lora-bold-italic text-white text-center">
          <a
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3"
          >
            <i className="fa-brands fa-whatsapp"></i>
            whatsapp
          </a>
        </li>
        <li className="lora-thin w-1/12 grid place-items-center">
          <a href="#restaurante">
            <i className="fa-solid fa-utensils"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
