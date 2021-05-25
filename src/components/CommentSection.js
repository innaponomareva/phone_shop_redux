import React from 'react';
import StarBox from './StarBox';


function CommentSection({product}){
  return(
    <ul className="comment-section">
      {
        product.comments.map((item,index)=>
          <li key={`${item.id}-${index}`} className="comment-row">
            <div style={{display:'flex', justifyContent: 'space-between'}}>
              <h4 className="comment-author">{item.userName}</h4>
              <p className="comment-date">{item.date}</p>
            </div>
            <StarBox rating={item.rating}/>
            <p>{item.commentText}</p>
          </li>
        )
      }
    </ul>
  )
}





export default CommentSection;