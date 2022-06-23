import type { NextPage } from "next";
import { useEffect, useState } from "react";

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
    <div>
      <div className="bg-red-500 flex-wrap justify-center items-center flex">
        {person.map((x)=>(
          <div className="bg-blue-500 w-28 h-28 m-1 justify-center items-center flex">
              {x.id}
          </div>  
        ))}
      </div>
    </div>
  );
};

export default Home;