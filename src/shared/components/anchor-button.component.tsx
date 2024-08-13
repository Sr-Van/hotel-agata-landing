type BtnProps = {
  text: string;
  href?: string;
  type?: string;
};

export const AnchorBtn = (props: BtnProps) => {
  const btnType = props.type || "primary";

  function getBtnClass() {
    if (btnType === "primary") {
      return "py-2 px-4 border-[1px] border-white text-white lora-thin shadow-inner hover:bg-white hover:text-black hover:shadow-none transition-all";
    }

    return "py-2 px-4 border-[1px] border-slate-950 text-slate-950 lora-thin hover:bg-slate-950 hover:text-white hover:shadow-none transition-all";
  }
  return (
    <a
      href={props.href}
      target="_blank"
      className={getBtnClass()}
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};
