import { FaDollarSign } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Course = ({ course, remainingTimehandler }) => {

    const { id, title, cover_photo, description, price, credit_time } = course

    return (
        <div>

            <div className="card bg-base-100 shadow-lg space-y-3 p-5">
                <figure className="">
                    <img src={cover_photo} alt="Cover-Photo" className="rounded-xl" />
                </figure>
                <div className=" items-center text-center">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between">


                        <p className="flex flex-row items-center"> <FaDollarSign />  Price {price}</p>


                        <p className="flex flex-row  gap-1 items-center" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            Credit : {credit_time} hr</p>
                    </div>
                    <button onClick={() => remainingTimehandler(credit_time, id)} className="btn w-full bg-[#2F80ED] text-white">Select</button>
                </div>
            </div>


        </div>
    );
};

Course.propTypes = {

    course: PropTypes.array,
    remainingTimehandler: PropTypes.func

};

export default Course;