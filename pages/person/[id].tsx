import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface financi {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate:number;
  interactive: boolean;
  currentPrice:number;
}
interface PersonDetail {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: [string]
  financialAssets: [financi],
  thumbnail:string;
  squareImage: string;
  bio: [string];
  about: [string];
  netWorth: number;
}

const PersonDetail: NextPage = () => {
  const {query} =useRouter();
  const person = query.id;
  const [detail, setDetail]= useState<PersonDetail>();
  useEffect(()=>{
    (async ()=>{
      const data = await(
        await fetch(
          `https://billions-api.nomadcoders.workers.dev/person/${person}`
        )
      ).json();
      setDetail(data);
    })()
  },[])
  return (
      <div className="flex-col flex pt-10 bg-slate-800 items-center">
        <div className="bg-slate-700 px-24 mx-20 my-10 rounded-lg">
          <div className="w-52 h-52 bg-center bg-cover rounded-lg mt-5"  style={{backgroundImage: `url(${detail?.squareImage})`}}/>
          <div className="text-white font-bold text-3xl w-full my-2">
            {detail?.id}
          </div>
          <div className="text-white w-full my-1 text-sm">
            {`자산 순가치: $${detail?.netWorth.toLocaleString()} million`}
          </div>
          <div className="text-white w-full my-1 text-sm">
            {`국가 : ${detail?.country}`}
          </div>
          <div className="text-white w-full my-1 text-sm">
            {`산업: ${detail?.industries}`}
          </div>
          <div className="text-white w-full my-1 text-sm leading-7 mb-5">
            {detail?.bio}
          </div>
        </div>      
        <div className="bg-slate-700 px-24 mx-20 my-10 rounded-lg">
          <div className="text-white font-bold text-3xl my-4">Financial Assets</div>
          <div className="flex-wrap flex items-center">
            {detail?.financialAssets.map((x)=>(
              <div className="w-47 m-3 border p-2 rounded-xl text-white text-sm">
                <div className="m-1">{`회사 이름 : ${x.companyName}`}</div>
                <div className="m-1">{`주가 : ${x.sharePrice}`}</div>
                <div className="m-1">{`증권 거래소 : ${x.exchange}`}</div>
              </div>
            )
            )}
          </div>
          </div>

      </div>
  );
};

export default PersonDetail;

