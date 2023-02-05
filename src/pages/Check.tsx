import { Link } from "react-router-dom";
import Tick from "../component/Tick";
import { useTelegram } from "../hooks/useTelegram";

function placeInCenter(str: string, substr: string) {
  let index = (str.length - substr.length) / 2;
  return str.substr(0, index) + substr + str.substr(index + substr.length);
}

export default function Check() {
  const { tg } = useTelegram();
  const wallet = "0xc6D3720f6286C5173C94523b8b02d549c9933662";
  const amount = "0.2";

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(wallet);
      tg.showAlert("link copied");
    } catch (err) {
      tg.showAlert("Не удалось скопировать: " + err);
    }
  }

  return (
    <div className="flex justify-center w-full h-[98vh] ">
      <div className="grid grid-cols-1 ">
        <div className="text-center my-8 bg-[var(--tg-theme-bg-color)]">
          <div className="">Tokens transferred to the wallet</div>
          <button
            className="font-normal text-center text-[var(--tg-theme-link-color)] mx-10"
            onClick={() => copyPageUrl()}
          >
            <p>{placeInCenter(wallet, " ")}</p>
          </button>
        </div>
        <div className="">
          <div
            className="trigger w-full
           flex justify-center  p-6"
          >
            <Tick size={200} />
          </div>
        </div>
        <div className="">
          {" "}
          <div className="text-center text-lg font-medium flex justify-center text-[#FF3A3A]">
            {`- ${amount} TMY`}
          </div>
          <div className="flex justify-center">
            <Link
              to="/"
              className="rounded-xl w-6/12 py-3 mt-10 text-sm font-medium bg-[var(--tg-theme-link-color)] text-center text-[ var(--tg-theme-secondary-bg-color)] "
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}