export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 to-slate-800 py-14 px-2 md:px-10 w-full flex flex-col gap-4">
      <h1 className="w-full md:w-[400px] md:mr-auto text-3xl lg:text-2xl lg:w-2/3 text-white lora-bold-italic text-center md:text-start">
        Ágata Hotel
      </h1>
      <address className="w-full md:w-[400px] md:mr-auto text-slate-400 text-sm lora-thin">
        R. Bento Abade de Freitas, 8 - Catu, BA, 48110-000
      </address>
      <p className="w-full md:w-[400px] md:mr-auto text-slate-400 text-sm lora-thin flex gap-2 items-center justify-start">
        <i className="fa-solid fa-phone"></i>
        (71) 9 9999-9999
      </p>
      <p className="w-full md:w-[400px] md:mr-auto text-slate-400 text-sm lora-thin flex gap-2 items-center justify-start">
        <i className="fa-brands fa-whatsapp"></i>
        (71) 9 9999-9988
      </p>
      <p className="w-full md:w-[400px] md:mr-auto text-slate-400 text-sm lora-thin">
        © 2024. Todos os direitos reservados.
      </p>

      <p className="w-full md:w-[400px] md:mr-auto text-slate-400 text-sm lora-thin flex gap-2 items-center justify-start">
        <i className="fa-solid fa-envelope"></i>
        contato@agatahotel.com
      </p>
      <p className="w-full md:w-[400px] md:mr-auto text-slate-400 text-sm lora-thin flex gap-2 items-center justify-start">
        <i className="fa-brands fa-instagram"></i>
        @agatahotel
      </p>
    </footer>
  );
};
