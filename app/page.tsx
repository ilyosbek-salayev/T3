import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div className="flex justify-center bg-blue-500 w-full">
      <header className="m-4">
        <Header />
      </header>
      {/* <main className="">
      </main> */}

      {/* <Footer>
      </Footer> */}
    </div>
  );
}
