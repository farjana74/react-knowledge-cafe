import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark}) => {

    return (
        <div className='md:w-1/5 border'>
            
            <h4 className='text-3xl'>bookmarks{bookmark.length}</h4>
            {
              bookmark.map(showMark =><Bookmark key={showMark.id} showMark={showMark} />)  
            }
        </div>
    );
};

export default Bookmarks;