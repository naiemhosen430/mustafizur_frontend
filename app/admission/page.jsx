import Link from "next/link";
import { MdFacebook } from "react-icons/md";

export default function page() {
  return (
    <>
      <div className="bg-slate-900 h-screen p-20 py-40">
        <h1 className="text-white p-10 text-4xl font-bold">
          A headng will be here
        </h1>
        <h1 className="text-white p-10 text-2xl font-bold">
          A headng will be here
        </h1>
      </div>
      <div className="p-10">
        <h1 className="text-4xl text-center font-bold p-10">
          ডিজিটাল মার্কেটিং শিওর সাকসেস ক্যাম্পেইন
        </h1>
        <h1 className="text-2xl text-center p-10">
          🎯 ০১ অক্টোবর থেকে শুরু হবে আমাদের ফাইভার আউটসোর্সিং ইনস্টিটিউট এর এই
          ডিজিটাল মার্কেটিং শিওর সাকসেস ক্যাম্পেইন।
        </h1>
      </div>
      <div className="text-center">
        <Link
          className="text-xl py-4 inline-block rounded-full shadow-xl px-8 bg-slate-800 text-white"
          href={"/"}
        >
          ভর্তি হতে ক্লিক করুন
        </Link>
      </div>
      <div className="p-10">
        <h1 className="text-2xl text-center">আমাদের পেইড কোর্সসমূহঃ</h1>
      </div>
      <div className="text-center space-x-10 space-y-10 lg:w-10/12 m-auto">
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
        <div className="p-5 lg:w-2/12 inline-block w-5 hover:shadow-xl hover:bg-slate-500 rounded-xl hover:p-7">
          <MdFacebook className="text-8xl inline-block" />
          <h1 className="text-2xl">ফেসবুক এন্ড ইন্সটাগ্রাম মার্কেটিং</h1>
        </div>
      </div>
    </>
  );
}
