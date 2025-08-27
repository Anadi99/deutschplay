import React from 'react';
import WordCard from './WordCard';
export default function WordGrid({ words }) {
  return (
    <div className='grid grid-cols-5 gap-2'>
      {words.map((w, idx) => <WordCard key={idx} word={w.word} article={w.article} />)}
    </div>
  );
}
