import React from 'react';

export default function Button({ name }) {
  // destructuring - array or object

  // const [milk, bread, can] = ['milk', 'bread', 'can'];

  // const milk   = a[0];
  // const bread  = a[1];
  // const can    = a[2];

  // destructuring - object

  // const { fruit, dairy, vegetable } = {
  //   fruit: 'apple',
  //   vegetable: 'tomato',
  //   dairy: 'milk',
  // };

  // const { name } = {
  //   name: 'enter email',
  // };

  // const fruit = obj.fruit;
  // const vegetable = obj.vegetable;
  // const dairy = obj.dairy;

  return (
    <button
      className="bg-[var(--background-lighter)] text-[26px] font-semibold border-4 border-[#045770] rounded-[11px] w-full
h-[100px]"
    >
      {name}
    </button>
  );
}
