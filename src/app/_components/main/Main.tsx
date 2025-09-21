import Features from "./Features";
import { BsCreditCardFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";

function Main() {
  return (
    <main className="lg:px-12 ">
      <Features />

      <div className="flex justify-between items-center dark:text-text">
        <h2 className="font-bold text-[1.5rem] lg:text-[1.8rem] mt-5 ">
          Gallery
        </h2>

        <div className="flex justify-center items-center gap-5">
          <button className="flex justify-center items-center gap-2">
            <ImExit /> <span>Logout</span>
          </button>
          <button className="flex justify-center items-center gap-2">
            <BsCreditCardFill />
            <span>Pricing</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
