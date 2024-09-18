import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { Progress } from 'antd';


const { TextArea } = Input;

export default function Summary() {
    const navigate = useNavigate();

    const summaryInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const summary = summaryInputRef.current.value;
        localStorage.setItem('summary', summary);

        console.log(summary);
        navigate('/skills');

    }
    return (
        <>
            <div className="summary-main defaultShadow w-[100%] mx-auto p-5 my-10">

                <div className=' flex items-center '>
                    <div className="left w-[30%] py-2 px-6 text-center ">
                        <h1 className=' my-2 text-2xl font-semibold text-gray-600 mb-2 '>Step 2</h1>
                        <hr />

                        <Progress type="circle" className='my-5' percent={20} />
                    </div>

                    <div className=' w-[70%] flex justify-center flex-col items-center '>
                        <h1 className=' text-xl text-center my-2 text-gray-600 '>Add Profile Summary</h1>
                        <textarea className='summmary_border w-[100%] p-3 rounded-md ' ref={summaryInputRef} rows={4} placeholder="Enter Short description of your profile..." />

                        <button onClick={handleSubmit} type="submit" className=' text-right button1 my-10 '>Next></button>
                    </div>
                </div>

            </div>
        </>
    )
}
