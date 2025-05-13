

"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

import React, { useContext, useEffect, useState } from 'react';

import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { HISTORY } from '../history/HistoryClient';
import { useRouter } from 'next/navigation';
import router from 'next/router';

function UsageTrack() {
  const { user } = useUser();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)

const{updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      GetData(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);


useEffect(() => {
  if (user?.primaryEmailAddress?.emailAddress) {
    GetData(user.primaryEmailAddress.emailAddress);
  }
}, [updateCreditUsage]);

  const GetData = async (email: string) => {
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, email));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length || 0);
    });
    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className='m-5'>
      <div className='bg-[#7B3AED] text-white rounded-lg p-3'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
          <div
            className='h-2 bg-white rounded-full'
            style={{ width: `${(totalUsage / 10000) * 100}%` }}
          />
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit Used</h2>
      </div>
<Button
        variant='outline'
        className='w-full my-3 text-[#7B3AED]'
        onClick={() => router.push('/dashboard/payment')} // ✅ Correct usage
      >
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
