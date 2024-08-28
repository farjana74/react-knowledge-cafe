

const Bookmark = ({showMark}) => {
    console.log(showMark)
    const {title} = showMark
    return (
        <div className='bg-white m-3 p-3 rounded'>
            
            <h2>bookmark :{title} </h2>
        </div>
    );
};

export default Bookmark;