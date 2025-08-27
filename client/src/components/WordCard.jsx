import React, { useState } from 'react';
export default function WordCard({ word, article }) {
  const [flipped, setFlipped] = useState(false);
  return (
         className='w-32 h-20 border m-2 flex items-center justify-center cursor-pointer'>
      {flipped ? `${article} ${word}` : 'Click to Reveal'}
    </div>
  );
}
