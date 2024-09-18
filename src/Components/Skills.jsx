import React, { useState } from 'react';
import { Progress } from 'antd';
import { FaPlus } from "react-icons/fa";
import { Button, Modal } from 'antd';

export default function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="skill_main  defaultShadow w-[100%] mx-auto p-5 my-10">
                <div className=' flex justify-end text-right '>
                    <h1 className='w-[10%] font-bold text-red-500 cursor-pointer ' onClick={showModal}>Hint</h1>
                </div>
                <div className=' flex justify-around items-center flex-col '>
                    <div className="left  py-2 px-6 text-center ">
                        <h1 className=' my-2 text-2xl font-semibold text-gray-600 mb-2 '>Step 3</h1>
                        <hr />

                        <div className=' flex flex-col '>
                            <Progress type="circle" className='my-5' percent={30} />
                        </div>

                    </div>
                    <div className="first_skills flex justify-between items-center text-left">
                        <div className=' flex flex-col mx-10 '>
                            <label htmlFor="" className=' font-semibold text-gray-600 '>Skill</label>
                            <input type="text" placeholder='Language , Framework, development-tools' className='w-[400px] border-2 p-3 ' />
                        </div>

                        <div className=' flex flex-col '>
                            <label htmlFor="" className=' font-semibold text-gray-600 '>Skill value</label>
                            <input type="text" placeholder='Java, python, javaScript, etc' className='w-[400px] border-2 p-3 ' />
                        </div>


                    </div>
                    <div className=' my-5 flex text-right items-end cursor-pointer'>
                        <h1 className='border-1 p-2 rounded-md text-black font-semibold text-xl border-2 '>Add Field+</h1>
                    </div>
                    <button type="submit" className='button1 my-10 '>Next></button>

                    <Modal title="Example" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className=' text-gray-700 flex justify-around items-center'>
                            <div>
                                <h1>Front-End</h1>
                                <h1>Backend</h1>
                                <h1>Data Base</h1>
                            </div>

                            <div>
                                <p>React, Html , Css, javaScript</p>
                                <p>Node, Java</p>
                                <p>SQL , MongoDB</p>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}
