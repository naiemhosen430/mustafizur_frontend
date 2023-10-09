import { IoMdCall } from "react-icons/io";
import { BsFilePerson } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";

export default function TopHeader() {
  return (
    <>
      <div class="lg:flex lg:items-center hidden p-2 py-10 space-x-5 bg-slate-300">
        <ul class="flex w-3/12 justify-center text-6xl items-center space-x-2">
          web name
        </ul>

        <ul class="flex w-3/12 justify-center items-center space-x-2">
          <div className="w-2/12 text-7xl">
            <BsFilePerson />
          </div>
          <div className="w-10/12">
            <h1 className="text-2xl">here will be text</h1>
            <h1 className="text-lg">here will be text</h1>
          </div>
        </ul>

        <ul class="flex w-3/12 justify-center items-center space-x-2">
          <div className="w-2/12 text-7xl">
            <IoMdCall />
          </div>
          <div className="w-10/12">
            <h1 className="text-2xl">here will be text</h1>
            <h1 className="text-lg">here will be text</h1>
          </div>
        </ul>

        <ul class="flex w-3/12 justify-center items-center space-x-2">
          <div className="w-2/12 text-7xl">
            <AiTwotoneStar />
          </div>
          <div className="w-10/12">
            <h1 className="text-2xl">here will be text</h1>
            <h1 className="text-lg">here will be text</h1>
          </div>
        </ul>
      </div>
    </>
  );
}
