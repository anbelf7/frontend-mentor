import React from 'react';

const index = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200">
      <div className="flex w-96 flex-col items-center justify-center rounded-3xl bg-white p-5 text-center">
        <img
          src="/qr-code-component/image-qr-code.png"
          alt=""
          className="rounded-2xl"
        />
        <div className="flex flex-col space-y-4 p-7 tracking-wide">
          <h2 className="text-2xl font-bold  text-slate-800">
            Improve your front-end skills by building projects
          </h2>
          <p className=" text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
