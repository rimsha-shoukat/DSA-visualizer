import Navbar from './navbar';

export default function Home() {

  return (
    <div className="w-[100%] h-auto transition-all duration-300 bg-[#f5f5f5] dark:bg-[#1e2a38] text-[#000000] dark:text-[#fffff]">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-2 pl-2">
        <h1 className="text-[2rem] font-semibold text-[#000000] dark:text-[#ffffff]">DSAvisualizer</h1>
        <Navbar/>
      </div>
    </div>
  );
}