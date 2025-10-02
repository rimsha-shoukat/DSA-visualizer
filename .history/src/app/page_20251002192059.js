import Navbar from './navbar';
import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <div className="w-[100%] h-[100%] transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-4 pl-3">
        <h1 className="clamp(0.8rem, 4vw, 2rem) text-[#2962ff] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
      <div className="w-[100%] h-auto flex flex-col items-center justify-center gap-12 mt-20">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-[#2962ff] leading-4 z-10 font-semibold">Learn & practice</h2>
          <h1 className="clamp() font-semibold">Data Structure </h1>
          <h1 className="clamp() font-semibold leading-14">& algorithms</h1>
        </div>
        <Button className="bg-[#2962ff] shadow-md" variant='secondary'>Explore</Button>
      </div>
    </div>
  );
}