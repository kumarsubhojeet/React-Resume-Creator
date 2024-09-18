import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style.css/Personal.css"
import { Progress } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

const RegistrationForm = () => {
    const navigate = useNavigate();

    const fnameInputRef = useRef(null);
    const lnameInputRef = useRef(null);
    const PhoneInputRef = useRef(null);
    const EmailInputRef = useRef(null);
    const GithubInputRef = useRef(null);
    const LinkedInInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform registration logic here
        const fname = fnameInputRef.current.value;
        const email = EmailInputRef.current.value;
        const phone = PhoneInputRef.current.value;
        const lname = lnameInputRef.current.value;
        const Github = GithubInputRef.current.value;
        const LinkedIn = LinkedInInputRef.current.value;

        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('Github', Github);
        localStorage.setItem('LinkedIn', LinkedIn);

        console.log(fname, lname, phone, email);
        navigate('/summary');

    };

    const ResetBtn = () => {
        fnameInputRef.current.value = '';
        EmailInputRef.current.value = '';
        PhoneInputRef.current.value = '';

        lnameInputRef.current.value = '';
        GithubInputRef.current.value = '';
        LinkedInInputRef.current.value = '';
        localStorage.clear();

        toast.success("Reset Successfully !", {
            position: "top-right"
        });
    }

    return (
        <div className='defaultShadow w-[100%] mx-auto p-5 my-10'>


            <div className=' flex  justify-around  '>

                <div className="left  py-2 px-6 text-center ">
                    <h1 className=' my-2 text-2xl font-semibold text-gray-600 mb-2 '>Step 1</h1>
                    <hr />

                    <div className=' flex flex-col '>
                        <Progress type="circle" className='my-5' percent={0} />
                        <button className=' bg-green-500 text-white hover:bg-green-700 p-6 rounded-xl ' onClick={ResetBtn}>Reset</button>
                    </div>

                </div>

                <div className="right  ">
                    <form onSubmit={handleSubmit} className=' flex flex-col items-center'>
                        <div className=' flex items-center justify-start text-left'>
                            <div className=' flex items-end flex-col '>
                                <div className=''>
                                    <label htmlFor="">First Name</label>
                                    <input required className='inputField my-2 mx-5 ' placeholder="Enter First Name" ref={fnameInputRef} type='text' />
                                </div>

                                <div className=''>
                                    <label htmlFor="">Phone Number</label>
                                    <input required className='inputField my-2 mx-5 ' placeholder="Enter Phone" ref={PhoneInputRef} type='number' />
                                </div>

                                <div className=''>
                                    <label htmlFor="">Github URL</label>
                                    <input required className='inputField my-2 mx-5 ' placeholder="Enter Github" ref={GithubInputRef} type='text' />

                                </div>

                            </div>
                            <div className=' flex items-end flex-col'>

                                <div className=' '>
                                    <label htmlFor="">Last Name</label>
                                    <input required className='inputField my-2 mx-5 ' placeholder="Enter Last Name" ref={lnameInputRef} type='text' />
                                </div>
                                <div className=' '>
                                    <label htmlFor="">Email Id</label>
                                    <input required className='inputField my-2 mx-5 ' placeholder="Enter Email" ref={EmailInputRef} type='email' />
                                </div>
                                <div className=' '>
                                    <label htmlFor="">Linkedin URL</label>
                                    <input required className='inputField my-2 mx-5 ' placeholder="Enter Linkedin" ref={LinkedInInputRef} type='text' />
                                </div>

                            </div>
                        </div>



                        <button type="submit" className='button1 my-10 '>Next></button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;