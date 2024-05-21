
import { useState } from 'react';
import Course from './Course';
import Info from './Info';
import { useEffect } from 'react';

import {toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';





function Courses() {


    const [courses, setcourses] = useState([]);

    const [availableCredit, setavailableCredit] = useState(20);
    const [totalCredithour, settotalCredithour] = useState(0);


    const [takenCourses, settakenCourses] = useState([]);



    useEffect(() => {


        fetch('/Courses.json')
            .then(res => res.json())
            .then(data => setcourses(data));

    }, []);



    //  declare the event handler for course remaining time 
    const remainingTimehandler = (time, id) => {
        // console.log('time took ' , time ) ;
        // console.log('Clicked by' ,id)
        const newCourse = courses.find(course => course.id === id);


        if (takenCourses.includes(newCourse)) {
           toast.warn('Already exists')

            return
        }

        const availabletime = availableCredit - time;
        // total time 
        const totalCredit = totalCredithour + time;
        // set the conditon 
        if (availabletime >= 0) {
            settotalCredithour(totalCredit);
            setavailableCredit(availabletime);
            const allCourses = [...takenCourses, newCourse]
            settakenCourses(allCourses)

        }
        else{

            toast.warn('Your Credit limit Exceeded')
        }

    };


    return (



        <div className='space-y-10'>


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