
import { Switch } from '@nextui-org/react';
import { useState } from 'react';
import {Link} from "@nextui-org/react";

const Modal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className='w-[100%]'>
                        <div className='flex justify-between mb-4'>
                            <h2>2-step verification</h2>
                            <Switch defaultSelected aria-label='Automatic updates' color='success'/>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <h2>Phone Number</h2>
                            <Link isExternal href='#' showAnchorIcon className='text-xl text-white'/>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <h2>Email</h2>
                            <Link isExternal href='#' showAnchorIcon className='text-xl text-white'/>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <h2>Reset Password</h2>
                            <Link isExternal href='#' showAnchorIcon className='text-xl text-white'/>
                        </div>
                    </div>
                );
            case 'dashboard':
                return (
                    <div>
                        <div className='flex justify-between mb-4'>
                            <h2>Get help with safety & privacy</h2>
                            <Link isExternal href='#' showAnchorIcon className='text-xl text-white'/>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div>
                        <div className='flex justify-between mb-4'>
                            <h2>Enable navigation sound</h2>
                            <Switch defaultSelected aria-label='Automatic updates' color='success'/>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <h2>Launch games is fullscreen mode</h2>
                            <Switch defaultSelected aria-label='Automatic updates' color='success'/>
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div>
                        <div className='flex justify-between mb-4'>
                            <h2>Enable high contrast</h2>
                            <Switch defaultSelected aria-label='Automatic updates' color='success'/>
                        </div>
                    </div>
                );
            default:
                return (
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Disabled Tab
                        </h3>
                        <p>This tab is currently disabled.</p>
                    </div>
                );
        }
    };

    return (

        <div className={`fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`} 
            role="dialog"
            aria-hidden={!isOpen}
            >
            <div className="relative p-4 w-full max-w-4xl"> 
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className='font-medium text-black'>Setting</h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="md:flex px-[3%]">
                        <ul className="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                            <li>
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`inline-flex items-center px-7 py-3 rounded-lg w-full ${activeTab === 'profile' ? ' text-blue-500' : ' text-gray-900    dark:hover:text-white'}`}
                                >
                                    My setting
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveTab('dashboard')}
                                    className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'dashboard' ? ' text-blue-500' : ' text-gray-900   dark:hover:text-white'}`}
                                >
                                    Safety & Privacy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`inline-flex items-center px-6 py-3 rounded-lg w-full ${activeTab === 'settings' ? ' text-blue-500' : ' text-gray-900    dark:hover:text-white'}`}
                                >
                                    Audio & Video
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveTab('contact')}
                                    className={`inline-flex items-center px-6 py-3 rounded-lg w-full ${activeTab === 'contact' ? ' text-blue-500' : ' text-gray-900  dark:hover:text-white'}`}
                                >
                                    Accessibility
                                </button>
                            </li>
                            <li>
                                <button
                                    className="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500"
                                    disabled
                                >
                                    Input
                                </button>
                            </li>
                        </ul>
                        <div className='w-[1px] h-[50] bg-gray-200'></div>
                        {/* Dynamic Content */}
                        <div className="p-6  text-medium text-gray-500 dark:text-gray-400  w-full">
                            {renderContent()}
                        </div>
                    </div>

                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                alert('Accepted');
                                onClose();
                            }}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={onClose}
                        >
                            Default
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
