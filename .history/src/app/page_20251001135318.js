import Navbar from './navbar';

export default function Home() {

  return (
    <div className="w-[100%] h-auto transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-2 pl-2">
        <h1 className="text-[2rem] text-[296] font-semibold">DSAvisualizer</h1>
        <Navbar/>
      </div>
    </div>
  );
}