import type { NextPage } from "next";





const Toy: NextPage = () => {
  return (
    <div className="bg-pink-200 w-full h-screen flex items-center justify-items-center p-10">
        <div className="bg-white flex-1 mw-1 h-full flex flex-col">
            <div className="font-bold text-5xl p-5">Weather</div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-slate-400">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Seoul</h1>
                    <h3 className="text-sm">Mars, 12AM</h3>
                </div>
                <div className="flex items-center">  
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                    <h1 className="font-bold text-3xl">19℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-2 flex justify-around bg-orange-400">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Daejeon</h1>
                    <h3 className="text-sm">Mars, 11AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <h1 className="font-bold text-3xl">32℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-green-500">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Daegu</h1>
                    <h3 className="text-sm">April, 12AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <h1 className="font-bold text-3xl">24℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-red-400">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Busan</h1>
                    <h3 className="text-sm">Mars, 12AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <h1 className="font-bold text-3xl">44℃</h1>
                </div>
            </div>
            <div className="border-2 border-black border-b-4 rounded-lg p-2 m-3 flex justify-around bg-blue-300">
                <div className="flex-col">
                    <h1 className="font-bold text-xl">Jeju</h1>
                    <h3 className="text-sm">Mars, 12AM</h3>
                </div>
                <div className="flex items-center">  
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <h1 className="font-bold text-3xl">34℃</h1>
                </div>
            </div>
            <div className="flex justify-center mh-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
        </div>
        <div className="bg-white flex-1 m-5 h-full flex justify-center">
            <h1>Work with best designers</h1>
        </div>
        <div className="bg-white flex-1 m-5 h-full flex justify-center">
            <h1>Friends</h1>
        </div>
    </div>
  );
};

export default Toy;