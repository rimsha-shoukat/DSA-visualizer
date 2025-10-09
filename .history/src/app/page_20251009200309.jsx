import Navbar from './navbar';
import Explore from './expolre-btn'
export default function Home() {

  return (
    <div className="w-[100%] h-[100%] transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between max-[480px]:items-end max-[480px]:justify-end py-4 pl-3">
        <h1 className="text-[1.8rem] max-[480px]:hidden text-[#2962ff] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
      <div className="w-[100%] h-auto flex flex-col items-center justify-center gap-12 mt-[6rem]">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-[#2962ff] leading-4 font-semibold">Learn & practice</h2>
          <h1 className="text-[4.4rem] max-[540px]:text-[3rem] max-[390px]:text-[2.5rem] font-semibold">Data Structure </h1>
          <h1 className="text-[4.4rem] max-[540px]:text-[3rem] max-[390px]:text-[2.5rem] font-semibold">& algorithms</h1>
        </div>
        <Explore />
      </div>
    </div>
  );
}