import { useEffect } from "react";

const homeBgs = ["home1.jpg", "home2.jpg", "home3.jpg", "home4.jpg"];
let lastIndex = 0;

export const Home = () => {
  useEffect(() => {
    setInterval(() => {
      changeHomeBg(lastIndex);
    }, 5000);
  }, []);

  return (
    <main className="w-full min-h-[80dvh] home relative">
      <div className="home-bg-overlay w-full h-full bg-slate-950/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"></div>
      <div className="home-bg"></div>
      <h1 className="whisper w-full text-white text-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-7xl lg:tracking-wider">
        Conforto e qualidade
      </h1>
    </main>
  );
};

function changeHomeBg(lastIndex: number) {
  const homeBg = document.querySelector(".home-bg") as HTMLElement;
  let index = Math.floor(Math.random() * homeBgs.length);
  console.log(index);

  if (index === lastIndex && index !== homeBgs.length) {
    index++;
  }

  homeBg.style.background = `url(/img/${homeBgs[index]})`;
  homeBg.style.backgroundSize = "cover";
}
