import Navbar from './navbar';

export default function Home() {

  return (
    <div className="w-[100%] h-auto transition-all duration-300">
      <div className="w-[100%] h-auto flex flex-r">
        <h1>DSAvisualizer</h1>
        <Navbar/>
      </div>
    </div>
  );
}