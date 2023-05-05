import { useState } from 'react';

export default function InputBar() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <input
        className="bg-gray-400 py-4 px-5 w-80 rounded-lg placeholder:text-gray-600"
        onChange={handleChange}
        placeholder="Milk, Biscuits, Bread ..."
      />
      <button className="bg-gray-600 text-gray-400 mx-2 p-4 rounded-lg">
        Add
      </button>

      <ul>
        <li></li>
      </ul>
    </>
  );
}
