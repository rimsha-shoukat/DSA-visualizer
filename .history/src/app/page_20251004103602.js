import Navbar from './navbar';
import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <div className="w-[100%] h-[100%] transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center max-[580px]:items-end max-[580px]:justify-end justify-between py-4 pl-3">
        <h1 className="text-[1.5rem] max-[580px]:hidden text-[#2962ff] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
      <div className="w-[100%] h-auto flex flex-col items-center justify-center gap-12 mt-[6rem]">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-[#2962ff] leading-4 z-10 font-semibold">Learn & practice</h2>
          <h1 className="text-[4rem] max-[540px]:text-[3rem] max font-semibold">Data Structure </h1>
          <h1 className="text-[4rem] max-[540px]:text-[3rem] max font-semibold">& algorithms</h1>
        </div>
        <Button className="bg-[#2962ff] shadow-md" variant='secondary'>Explore</Button>
      </div>
    </div>
  );
}