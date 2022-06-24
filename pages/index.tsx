import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface PersonType {
  id: string;
  industries : [string];
  name: string;
  netWorth: number;
  squareImage: string;
}


const Home: NextPage = () => {
  const [person, setPerson]= useState<PersonType[]>([]);

  useEffect(()=>{
    (async ()=>{
      const data = await(
        await fetch(
          "https://billions-api.nomadcoders.workers.dev/"
        )
      ).json();
      setPerson(data);
    })()
  },[])
  return (
    <div className="bg-slate-800">
      <div className="flex-wrap justify-center items-center flex ">
        {person.map((x)=>(
          <Link href={`/person/${x.id}`}  key={uuid()}>
            <div className="w-52 h-80 m-2 justify-center items-center flex-column bg-slate-700 shadow-2xl rounded hover:bg-violet-600 hover:cursor-pointer hover:scale-105 hover:ease-in-out" key={uuid()}>
                <div className="w-52 h-52 bg-center bg-cover rounded"  style={{backgroundImage: `url(${x.squareImage})`}}/>
                <div className="text-white m-1 text-center font-bold">
                  {x.id}
                </div>
                <div className="text-white text-cente text-xs text-center m-2">
                  {`순자산 : $${Math.ceil(x.netWorth).toLocaleString()} billion`}
                </div>
                <div className="text-white text-cente text-xs text-center m-2">
                  {`산업군 : ${x.industries}`}
                </div>
            </div>  
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Home;