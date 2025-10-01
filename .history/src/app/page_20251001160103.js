import Navbar from './navbar';
import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <div className="w-[100%] h-[100%] transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-3 pl-3">
        <h1 className="text-[2rem] text-[#2962ff] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
      <div className="w-[100%] h-[80vh] flex flex-col items-center justify-center gap-14">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-[#2962ff] leading-4 font-semibold">Learn & practice</h2>
          <h1 className="text-[4rem] font-semibold leading-18">Data Structure <br/> & algorithms</h1>
        </div>
        <Button className="bg-[#2962ff] shadow-sm dark:bg-[#2952ff]"  variant='outline'>Explore</Button>
      </div>
    </div>
  );
}