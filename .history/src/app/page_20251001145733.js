import Navbar from './navbar';
import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <div className="w-[100%] h-[100%] transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-3 pl-3">
        <h1 className="text-[2rem] text-[#2962ff] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center gap-8">
        <div className="flex items-start justify">
          <h2>Learn & practice</h2>
          <h1>Data Structure <br/> & algorithms</h1>
        </div>
        <Button variant='outline'>Explore</Button>
      </div>
    </div>
  );
}