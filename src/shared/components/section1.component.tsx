// section de imagem e uma breve introducao

export const Section1 = () => {
  return (
    <section className="w-full min-h-[100dvh] bg-slate-400 flex flex-col justify-center items-center lg:flex-row gap-10 p-10 z-40 relative overflow-hidden">
      <div className="border-[1px] border-slate-950 w-full md:w-[70%] lg:w-1/3 p-6">
        <img
          src="/img/home2.jpg"
          alt="hotel"
          className="w-full"
          loading="lazy"
        />
      </div>

      <article className="text-fade-up flex flex-col items-center gap-4 lg:w-1/2 overflow-x-auto">
        <h2 className="whisper text-7xl w-full text-center text-slate-950">
          Hotel Ágata
        </h2>

        <p className="lora-thin md:w-1/2 text-center">
          Localizado em Catú/BA, o hotel Ágata é uma ótima escolha para
          viajantes. Se encontra no Bairro Pioneiro, está na entrada e perto de
          tudo na cidade.
        </p>
      </article>
    </section>
  );
};
