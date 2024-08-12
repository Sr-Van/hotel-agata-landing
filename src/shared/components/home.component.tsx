export const Home = () => {
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
