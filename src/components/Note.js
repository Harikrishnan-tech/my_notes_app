import{MdDeleteForever}from 'react-icons/md';
const Note=()=>{
    return(
        <div className='note'>
            <span>Hello! This is our firast note</span>
            <div className='note-footer'>
                <small>5/7/23</small>
                <MdDeleteForever className='delete-icon'size='2cm'/>
            </div>
        </div>
    );
};
export default Note;