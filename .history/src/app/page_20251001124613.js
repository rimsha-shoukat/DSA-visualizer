import Navbar from './navbar';

export default function Home() {

  return (
    <div className="w-[100%] h-auto transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-row items-center justify-between">
        <h1 className="text">DSAvisualizer</h1>
        <Navbar/>
      </div>
    </div>
  );
}