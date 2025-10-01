import Navbar from './navbar';
import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <div className="w-[100%] h-screen transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-3 pl-3">
        <h1 className="text-[2rem] text-[#2962ff] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-[#2962ff] leading-4">Learn & practice</h2>
          <h1 className="text-[3.5rem] font-semibold">Data Structure <br/> & algorithms</h1>
        </div>
        <Button className="bg-[#2962ff] dark:bg-[#]" variant='outline'>Explore</Button>
      </div>
    </div>
  );
}