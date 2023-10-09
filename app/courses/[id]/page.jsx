import React from "react";

export default function page({ params }) {
  return (
    <>
      <button className="text-xl py-4 px-8 w-full block text-center bg-slate-200 text-black font-bold rounded-md fixed bottom-0">
        Enroll now
      </button>
      <div className="h-screen">
        <h1 className="text-4xl p-5">Here will be course name</h1>
        <div className="p-10 flex justify-center">
          <div className="lg:w-8/12">
            <img className="w-full" src="" alt="no image" />
          </div>
          <div className="ld:w-4/12 space-y-5">
            <div className="p-10 rounded-2xl bg-slate-900 text-white font-bold">
              <h1 className="text-5xl">00</h1>
              <h1 className="text-xl py-2">Success on course</h1>
            </div>
            <div className="p-10 rounded-2xl bg-slate-900 text-white font-bold">
              <h1 className="text-5xl">00</h1>
              <h1 className="text-xl py-2">Success on course</h1>
            </div>
            <div className="p-10 rounded-2xl bg-slate-900 text-white font-bold">
              <h1 className="text-5xl">00</h1>
              <h1 className="text-xl py-2">Success on course</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-4xl border-b-2 border-red-600 font-bold py-2">
          About the course
        </h1>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga
          nemo iusto quod officia aliquid, eum odio, ut optio facere deserunt
          veritatis aperiam, tempore doloremque voluptates earum molestiae quo
          soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          fuga nemo iusto quod officia aliquid, eum odio, ut optio facere
          deserunt veritatis aperiam, tempore doloremque voluptates earum
          molestiae quo soluta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero fuga nemo iusto quod officia aliquid, eum odio,
          ut optio facere deserunt veritatis aperiam, tempore doloremque
          voluptates earum molestiae quo soluta! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero fuga nemo iusto quod officia
          aliquid, eum odio, ut optio facere deserunt veritatis aperiam, tempore
          doloremque voluptates earum molestiae quo soluta! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Vero fuga nemo iusto quod
          officia aliquid, eum odio, ut optio facere deserunt veritatis aperiam,
          tempore doloremque voluptates earum molestiae quo soluta! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vero fuga nemo iusto quod
          officia aliquid, eum odio, ut optio facere deserunt veritatis aperiam,
          tempore doloremque voluptates earum molestiae quo soluta! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vero fuga nemo iusto quod
          officia aliquid, eum odio, ut optio facere deserunt veritatis aperiam,
          tempore doloremque voluptates earum molestiae quo soluta!
        </p>
      </div>
    </>
  );
}
