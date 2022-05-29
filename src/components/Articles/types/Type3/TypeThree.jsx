import React from 'react';
import './TypeThree.scss';

const TypeThree = ({article}) => {
  return (
    <div className='type-three-article'>
        {article?.image && <img className="article-image"
          src={article?.image}
          alt={article?.title}
        />}
    </div>
  )
}

export default TypeThree