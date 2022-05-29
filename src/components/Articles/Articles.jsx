import React from 'react';
import TypeOne from './types/Type1/TypeOne';
import TypeTwo from './types/Type2/TypeTwo';
import TypeThree from './types/Type3/TypeThree';
import './Articles.scss';

const Articles = ({ list }) => {
    const articles = list?.data?.en;

  return (
    <div className='articles-container'>
        <div className='display-options'>
        </div>
        <div className='articles-list'>
            {articles.map((article, i) => {
                if(article?.articleType === 'Type1'){
                    return <TypeOne key={i} article={article} />
                }
                else if(article?.articleType === 'Type2'){
                    return <TypeTwo key={i} article={article} />
                }
                else if(article?.articleType === 'Type3'){
                    return <TypeThree key={i} article={article} />
                }
                return null;
            })}
        </div>

    </div>
  )
}

export default Articles