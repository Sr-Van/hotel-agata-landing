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
      />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <AnchorBtn text="Ver mais" href="#" type="secondary" />
    </article>
  );
};
