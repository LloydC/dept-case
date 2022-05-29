import React from 'react';
import './TypeThree.scss';

const TypeThree = ({ article }) => {
  return (
  <div className='type-three-article'>
    <p className='type-three-company'>{article?.company}</p>
    <h2 className='type-three-title'>{article?.title}</h2>
  </div>
  )
}

export default TypeThree