import { AnchorBtn } from "./anchor-button.component";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export const RoomCard = (props: CardProps) => {
  return (
    <article
      className="w-full max-w-[400px] lg:max-w-[550px] flex flex-col gap-3 justify-center items-center p-10 border-[1px] border-slate-950"
      id="quartos"
    >
      <img
        src={props.image}
        alt="hotel"
        className="w-full h-[200px] object-cover"
        loading="lazy"
        aria-label="Foto do quarto"
      />
      <h4 className="lora-bold" aria-label="Nome do quarto">
        {props.title}
      </h4>
      <p className="lora-thin text-xs" aria-label="Descricão">
        {props.description}
      </p>
      <AnchorBtn text="Ver mais" href="#" type="secondary" />
    </article>
  );
};
