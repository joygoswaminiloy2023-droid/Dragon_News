import Link from 'next/link';
import React from 'react';

const LeftSec = ({ cd, activeid }) => {
  const { category_name, category_id } = cd;

  const isActive = String(activeid) === String(category_id);

  return (
    <Link href={`/category/${category_id}`}>
      <li
        className={`list-none py-2 px-3 transition hover:bg-gray-200 border-l-4 ${
          isActive
            ? 'border-pink-800 bg-gray-100 font-semibold'
            : 'border-transparent opacity-70'
        }`}
      >
        {category_name}
      </li>
    </Link>
  );
};

export default LeftSec;