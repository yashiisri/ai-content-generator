"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/Aimodel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { AlertDialog } from '@/components/ui/alert-dialog'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'


interface PROPS {

  params: {
    'template-slug': string
  }
}
function CreateNewContent(props: PROPS) {

  const selectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug']);
  const [loading, setLoading] = useState(false);

  const [aiOutput, setAiOutput] = useState<string>()
  const {user}=useUser()
  const router=useRouter();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
  const GenerateAIContent = async (FormData: any) => {
    if(totalUsage >= 10000){
      <AlertDialog>Please Upgrade</AlertDialog>
      router.push('/dahsboard/billing')
      return;
    }
    setLoading(true);

    setUpdateCreditUsage(Date.now())
    

    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAIPrompt = JSON.stringify(FormData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    const aiText = await result.response.text();
    setAiOutput(aiText);
    await SaveInDB(FormData, selectedTemplate?.slug, aiText);

    setLoading(false);
  }

  // const SaveInDB = async (formData: any, slug: any, aiResp: string) => {
  //   const result = await db.insert(AIOutput).values({
  //     formData: JSON.stringify(formData),
  //     templateSlug: slug,
  //     aiResponse: aiResp,
  //     createdBy:user?.primaryEmailAddress?.emailAddress,
  //     createdAt:moment().format('DD/MM/yyyy'),

  //     })
  // }
const SaveInDB = async (formData: any, slug: any, aiResp: string) => {
  if (!user?.primaryEmailAddress?.emailAddress) {
    console.error("User not logged in or email not available.");
    return;
  }

  try {
    const result = await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug: slug || "unknown-template",
      aiResponse: aiResp || "No response",
      createdBy: user?.primaryEmailAddress.emailAddress || "anonymous@example.com",
      createdAt: moment().format('DD/MM/YYYY'),
    });

    console.log(result); // Now it will log the result correctly
  } catch (error) {
    console.error("Error inserting into database:", error);
  }
};


  return (
    <div className='p-10'>
      <Link href={"/dashboard"}> <Button className='bg-[#7B3AED]'> <ArrowBigLeft />Back</Button></Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
        <FormSection selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading} />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>

      </div>

    </div>

  )
}

export default CreateNewContent