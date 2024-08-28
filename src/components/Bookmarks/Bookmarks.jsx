import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark,timeCount}) => {

    return (
        <div className='md:w-1/5 bg-slate-200 p-3 '>
            <div className='text-2xl  bg-white p-3 mb-2'>
                <h4>Spent time on read : {timeCount}</h4>
            </div>
            
            <h4 className='text-3xl text-center'>bookmarks: {bookmark.length}</h4>
            {
              bookmark.map(showMark =><Bookmark key={showMark.id} showMark={showMark} />)  
            }
        </div>
    );
};

export default Bookmarks;