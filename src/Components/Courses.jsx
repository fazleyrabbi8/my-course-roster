
import { useState } from 'react';
import Course from './Course';
import Info from './Info';
import { useEffect } from 'react';


function Courses() {


    const [courses, setcourses] = useState([]);

    const [availableCredit, setavailableCredit] = useState(20);
    const [totalCredithour, settotalCredithour] = useState(0);


    const [takenCourses, settakenCourses] = useState([]);
    const [modalContent, setModalContent] = useState('');





    const handleModal = () => {

        document.getElementById('my_modal_5').showModal()
    }


    useEffect(() => {


        fetch('/Courses.json')
            .then(res => res.json())
            .then(data => setcourses(data));

    }, [])



    //  declare the event handler for course remaining time 


    const remainingTimehandler = (time, id) => {


        // console.log('time took ' , time ) ;
        // console.log('Clicked by' ,id)
        const newCourse = courses.find(course => course.id === id);


        if (takenCourses.includes(newCourse)) {
            // console.log('already exists')
            setModalContent('This Course is already taken')
            handleModal()
            return
        }

        const availabletime = availableCredit - time;



        const totalCredit = totalCredithour + time;




        if (availabletime >= 0) {

            settotalCredithour(totalCredit);

            setavailableCredit(availabletime);


            const allCourses = [...takenCourses, newCourse]


            settakenCourses(allCourses)

        }
        else {
            setModalContent("You don't have enough credits")
            handleModal()
        }


    };


    // modal handler




    // console.log(takenCourses)





    return (

        //modal

        <div className='space-y-10'>


            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4 text-2xl  text-center"> {modalContent}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>





            <div className=' flex flex-col md:flex-row justify-between '>
                <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>


                    {

                        courses.map(course => <Course remainingTimehandler={remainingTimehandler} course={course} key={course}></Course>)
                    }
                </div>

                <Info totalCredithour={totalCredithour} takenCourses={takenCourses} availableCredit={availableCredit}></Info>

            </div>




        </div>
    );
}


export default Courses;