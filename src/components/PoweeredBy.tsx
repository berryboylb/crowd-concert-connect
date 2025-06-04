import { Link } from "react-router-dom";

export function PoweredBy() {
  return (
    <h4 className="scroll-m-20 flex justify-center items-center gap-2 font-montserrat text-white text-center text-xs font-normal tracking-tight p-5">
      Powered by{" "}
      <Link
        target="_blank"
        to="https://useticketeur.com/"
        className="hover:opacity-90"
      >
        <img
          src={"/logo.svg"}
          alt={"/logo.svg"}
          width={100}
          height={100}
          className=""
        />
      </Link>
    </h4>
  );
}
