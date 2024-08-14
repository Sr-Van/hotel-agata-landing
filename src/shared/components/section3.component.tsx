export const Section3 = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center p-10 gap-4 overflow-x-hidden bg-slate-400">
      <article className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center gap-4">
        <h1
          className="whisper w-full text-center text-4xl md:text-6xl"
          data-aos="fade-right"
        >
          Restaurante
        </h1>
        <p
          className="lora-thin w-full text-center md:w-1/2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Toda estadia tem café da manhã incluso, com um cardápio variado com
          comidas típicas da região e outras mais.
        </p>
      </article>

      <div className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center p-3 md:p-10 border-[1px] border-slate-950">
        <div className="carousel-img1 object-cover w-full">
          <img src="/img/home1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
