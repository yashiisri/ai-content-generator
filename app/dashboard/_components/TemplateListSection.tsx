import Template from '@/app/(data)/Template'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'


export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
function TemplateListSection({userSearchInput}:any) {
  const [templateList,setTemplateList]=useState(Template)
  useEffect(()=>{
    
    if(userSearchInput){
      const filterData=Template.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
      setTemplateList(filterData);
    }else{
      setTemplateList(Template)
    }
  },[userSearchInput])
  return (
   
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
        {templateList.map((item:TEMPLATE,index:number)=>(
            <TemplateCard {...item}/>

        ))}
    </div>
  )
}

export default TemplateListSection