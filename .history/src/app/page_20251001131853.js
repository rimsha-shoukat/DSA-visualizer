import Navbar from './navbar';

export default function Home() {

  return (
    <div className="w-[100%] h-auto transition-all duration-300 bg-gray-200 dark:bg-gray-800">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between py-2 pl-2">
        <h1 className="text-[2rem] font-semibold text-[#000000] dark:text-[#ffffff]">DSAvisualizer</h1>
        <Navbar/>
      </div>
    </div>
  );
}