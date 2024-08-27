import React from 'react';

const Bookmark = ({showMark}) => {
    console.log(showMark)
    const {title} = showMark
    return (
        <div className='bg-slate-100 m-3'>
            <h2>bookmark :{title} </h2>
        </div>
    );
};

export default Bookmark;