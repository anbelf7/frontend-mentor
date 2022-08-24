import React from 'react';

const grafico = ({ day, amount, today }) => {
  console.log(amount);
  return (
    <div className="group flex h-52 w-full flex-col items-center justify-end pt-6 hover:cursor-pointer">
      <div className="mb-2 rounded-md bg-very-pale-orange px-2 py-1 text-very-pale-orange group-hover:bg-dark-brown">
        <h3 className="">${amount}</h3>
      </div>
      <div
        className={`h-[calc(${amount}px*2)] w-2/3 rounded ${
          today === day ? 'bg-cyan' : 'bg-soft-red'
        } ${
          today === day
            ? 'group-hover:bg-cyan/70'
            : 'group-hover:bg-soft-red/70'
        }  `}
      ></div>
      <label className="text-sm text-medium-brown">{day}</label>
    </div>
  );
};

export default grafico;
