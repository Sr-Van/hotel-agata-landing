// section para mostrar images dos quartos
import { RoomCard } from "./room-card.component";
export const Section2 = () => {
  return (
    <section
      className="w-full min-h-[100dvh] flex flex-col gap-4 p-10 overflow-x-hidden"
      id="quartos"
    >
      <h1
        data-aos="fade-left"
        data-aos-delay="300"
        className="courier-prime-regular text-6xl md:text-8xl lg:text-9xl text-slate-400 w-full text-center"
      >
        HOTEL ÁGATA
      </h1>

      <p
        data-aos="fade-left"
        data-aos-delay="670"
        className="lora-thin mb-6 w-full text-center"
      >
        Veja nossos quartos e escolha o que seja melhor para sua estadia.
      </p>

      <ul className="w-full flex flex-col gap-4 justify-center items-center lg:grid lg:grid-cols-2">
        <li className="w-full grid place-items-center">
          <RoomCard
            title="Quarto Simples"
            description="Quarto com banheiro privado, ar condicionado e uma cama de solteiro."
            image="/quarto-simples.jpg"
          />
        </li>

        <li className="w-full grid place-items-center">
          <RoomCard
            title="Quarto Duplo"
            description="Quarto com banheiro privado, ar condicionado e duas camas de solteiro."
            image="/quarto-duplo.jpg"
          />
        </li>

        <li className="w-full grid place-items-center">
          <RoomCard
            title="Suite Standart"
            description="Quarto com banheiro privado, ar condicionado, uma cama de casal, mesa retrátil e armário."
            image="/quarto-triplo.jpg"
          />
        </li>

        <li className="w-full grid place-items-center">
          <RoomCard
            title="Suite Premium"
            description="Quarto com banheiro privado, ar condicionado, uma cama king, mesa de escritório, varanda e armário."
            image="/quarto-quadruplo.jpg"
          />
        </li>
      </ul>
    </section>
  );
};
