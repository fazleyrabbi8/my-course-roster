
import PropTypes from 'prop-types';
import './Info.css'

const Info = ({ availableCredit ,takenCourses ,totalCredithour }) => {

//   console.log(availableCredit)


    return (
        <div>



            <div className='bg-base-100 shadow-lg p-5 rounded-2xl space-y-5'>

                <h2 className='text-xl font-semibold text-[#2F80ED] text-center mb-5'>Credit Hour Remaining {availableCredit} hr</h2>
                <hr className='bg-slate-400' />

                <div className='space-y-5'>
                    <h2 className='text-2xl'>Course Name</h2>
                    <ul className='Course_names mb-5  text-[#1C1B1B]'>
                        {takenCourses.map((takenCourse,idx)=> <li key={idx}>{takenCourse.title}</li>)}
                    </ul>
                    <hr />

                    <h3 className='my-5'>
                        Total Credit Hour : {totalCredithour} 
                    </h3>
                    <hr />

                    <h1>Total Price : 48000 USD</h1>
                </div>
            </div>
        </div>
    );
};

Info.propTypes = {
    availableCredit: PropTypes.array,
    takenCourses :PropTypes.array ,
    totalCredithour : PropTypes.number 
};

export default Info;