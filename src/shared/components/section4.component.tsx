export const Section4 = () => {
  return (
    <section
      id="serviço"
      className="min-h-[50dvh] w-full flex flex-col lg:flex-row lg:justify-between lg:items-center p-10 gap-4 overflow-x-hidden"
    >
      <div
        data-aos="fade-left"
        className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center p-3 md:p-10 border-[1px] border-slate-950"
      >
        <div className="carousel-img1 object-cover w-full">
          <img src="/img/home4.jpg" alt="estacionamento" />
        </div>
      </div>

      <aside className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center gap-4">
        <h1
          className="whisper w-full text-center text-4xl md:text-6xl"
          data-aos="fade-right"
          aria-label="serviços"
        >
          Serviços
        </h1>

        <p
          className="lora-thin w-full text-center md:w-1/2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Estacionamento privato para todos os quartos, wi-fi, piscina, etc. É
          possível tambem se locomover com as bicicletas rastreadas que temos,
          pagando uma pequena taxa.
        </p>
      </aside>
    </section>
  );
};
