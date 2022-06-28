import type { NextPage } from "next";





const Toy: NextPage = () => {
  return (
    <div className="bg-pink-200 w-full h-screen flex items-center justify-items-center p-10 min-w-3/5">
        <div className="bg-white flex-1 mw-1 h-full flex flex-col">
            <div className="font-bold text-5xl p-5">Weather</div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-slate-400">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Seoul</h1>
                    <h3 className="text-sm">Mars, 12AM</h3>
                </div>
                <div className="flex items-center">  
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                    <h1 className="font-bold text-3xl">19℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-2 flex justify-around bg-orange-400">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Daejeon</h1>
                    <h3 className="text-sm">Mars, 11AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <h1 className="font-bold text-3xl">32℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-green-500">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Daegu</h1>
                    <h3 className="text-sm">April, 12AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <h1 className="font-bold text-3xl">24℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-red-400">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Busan</h1>
                    <h3 className="text-sm">Mars, 12AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <h1 className="font-bold text-3xl">44℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-blue-300">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Jeju</h1>
                    <h3 className="text-sm">Mars, 12AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <h1 className="font-bold text-3xl">34℃</h1>
                </div>
            </div>
            <div className="flex justify-center mh-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
        </div>
        <div className="bg-white flex-1 m-5 h-full flex flex-col ">
            <div className="p-5 pb-0">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="flex flex-col pw-5 items-center text-center">
                <h3 className="font-bold mb-2">SIMPLE TAG</h3>
                <h1 className="font-bold text-4xl">Work with best designers</h1>
            </div>
            <div className="flex flex-wrap justify-center m-3 mb-10">
                <div className="w-32 h-36 bg-yellow-400 m-2 border-2 border-black border-b-4 border-r-4 rounded-lg flex items-center justify-center border-">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div className="w-32 h-36 bg-green-400 m-2 border-2 border-black border-b-4 border-r-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div className="w-32 h-36  bg-pink-400 m-2 border-2 border-black border-b-4 border-r-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div className="w-32 h-36 bg-red-400 m-2 border-2 border-black border-b-4 border-r-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
            </div>
            <div className="mx-16 h-16 items-center flex justify-center bg-blue-700 font-bold rounded-xl border-2 border-black text-white">
                Let's get it done
            </div>
        </div>
        <div className="flex-1 m-5 h-full flex flex-col bg-yellow-500">
            <div className="flex m-10 items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                <h1 className="font-bold text-2xl mx-12 ">Friends</h1>
            </div>
            <div className="m-5 bg-white text-gray-500 h-12 border-2 border-black border-b-4 rounded-xl flex justify-between items-center p-2">
                <h1 className="font-bold text-lg">Search with love ...</h1>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex bg-white items-center justify-around">
                <div className="bg-red-400 w-14 h-14 border-2 border-black rounded-full flex justify-center items-center font-extrabold text-xl mx-2">
                    Lee
                </div>
                <div className="flex-col mr-10">
                    <h1 className="font-bold text-xl">Ji hoon</h1>
                    <h3 className="text-sm">Front-Develope</h3>
                </div>
                <div className="flex items-center w-16 h-10 justify-center bg-yellow-500 border-2 border-black border-b-4 rounded-xl">  
                    Invite
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex bg-white items-center justify-around">
                <div className="bg-green-400 w-14 h-14 border-2 border-black rounded-full flex justify-center items-center font-extrabold text-xl mx-2">
                    Jung
                </div>
                <div className="flex-col mr-10">
                    <h1 className="font-bold text-lg">Hae young</h1>
                    <h3 className="text-sm">Back-Develope</h3>
                </div>
                <div className="flex items-center w-16 h-10 justify-center bg-yellow-500 border-2 border-black border-b-4 rounded-xl">  
                    Invite
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex bg-white items-center justify-around">
                <div className="bg-blue-400 w-14 h-14 border-2 border-black rounded-full flex justify-center items-center font-extrabold text-xl mx-2">
                    Kim
                </div>
                <div className="flex-col mr-10">
                    <h1 className="font-bold text-xl">Hong sik</h1>
                    <h3 className="text-sm">Engineer</h3>
                </div>
                <div className="flex items-center w-16 h-10 justify-center bg-yellow-500 border-2 border-black border-b-4 rounded-xl">  
                    Invite
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex bg-white items-center justify-around">
                <div className="bg-violet-400 w-14 h-14 border-2 border-black rounded-full flex justify-center items-center font-extrabold text-xl mx-2">
                    Choi
                </div>
                <div className="flex-col mr-10">
                    <h1 className="font-bold text-lg">Young hoon</h1>
                    <h3 className="text-sm">Server-Engineer</h3>
                </div>
                <div className="flex items-center w-16 h-10 justify-center bg-yellow-500 border-2 border-black border-b-4 rounded-xl">  
                    Invite
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex bg-white items-center justify-around">
                <div className="bg-orange-400 w-14 h-14 border-2 border-black rounded-full flex justify-center items-center font-extrabold text-xl mx-2">
                    Yoo
                </div>
                <div className="flex-col mr-10">
                    <h1 className="font-bold text-xl">Seong yong</h1>
                    <h3 className="text-sm">Chef</h3>
                </div>
                <div className="flex items-center w-16 h-10 justify-center bg-yellow-500 border-2 border-black border-b-4 rounded-xl">  
                    Invite
                </div>
            </div>
        </div>
    </div>
  );
};

export default Toy;