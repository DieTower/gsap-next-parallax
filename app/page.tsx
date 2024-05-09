import { Slider } from "./components/Slider";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Slider>
        <div className="w-full h-full">
          <h1>child-main</h1>
        </div>
        <div className="w-full h-full bg-yellow-500">
          <h1>child-0</h1>
        </div>
        <div className="w-full h-full bg-blue-500">
          <h1>child-1</h1>
        </div>
        <div className="w-full h-full bg-green-500">
          <h1>child-2</h1>
        </div>
      </Slider>
    </main>
  );
}
