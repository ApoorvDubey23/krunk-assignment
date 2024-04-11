import React from 'react'
import Form from "react-bootstrap/Form"
import logo from "../assets/logo.png"
function SelectFilter() {
    const data=["Strap-long","Colour","Size","Brand","Material"]
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
<div>
      Select filters</div>
      <div className='flex justify-center items-center'>
      <svg width="21" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3.33331H12.1667" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.83333 3.33331H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10H10.5" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.16667 10H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 16.6667H13.8333" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.6667H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1667 1.66669V5.00002" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.16669 8.33331V11.6666" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8333 15V18.3333" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div>Filters</div>

      </div>
      </div>
      <div className='flex flex-wrap gap-4'>
{data.map((item)=>(
    <div className=' rounded-md gap-2 flex text-[15px] w-fit border-[1px]  bg-[#F4F4F4] text-[#737373] px-2 py-[0.2rem] '>
        <div>

      {item}
        </div>
      <button onClick={""} ><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_232)">
<path d="M1.35257 9.91345L9.10898 2.15704" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.35257 2.15704L9.10898 9.91345" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_232">
<rect width="10.1538" height="11" fill="white" transform="translate(0.153839 0.5)"/>
</clipPath>
</defs>
</svg>
</button>
    </div>
    
))}
      
    
      </div>
      <div className=' border-[1.5px] rounded-lg border-[black] w-[100%] bg-[#EFF3FD]  flex'><div className='w-[100%]'>
      <Form.Control className='w-[100%] p-2 ' type="text" placeholder="Type your text" /></div><div className='flex items-center justify-center'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8667 9.20836L10.2083 16.8667C9.27014 17.8049 7.99766 18.332 6.67084 18.332C5.34402 18.332 4.07154 17.8049 3.13334 16.8667C2.19514 15.9285 1.66806 14.656 1.66806 13.3292C1.66806 12.0024 2.19514 10.7299 3.13334 9.79169L10.275 2.65003C10.9005 2.02345 11.7492 1.67101 12.6346 1.67023C13.5199 1.66945 14.3693 2.02039 14.9958 2.64586C15.6224 3.27133 15.9749 4.12009 15.9756 5.00541C15.9764 5.89074 15.6255 6.74012 15 7.36669L7.84167 14.5084C7.52894 14.8211 7.10478 14.9968 6.66251 14.9968C6.22023 14.9968 5.79608 14.8211 5.48334 14.5084C5.17061 14.1956 4.99491 13.7715 4.99491 13.3292C4.99491 12.8869 5.17061 12.4628 5.48334 12.15L12.5583 5.08336" stroke="#949494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>

      <button className='bg-[#4C82EF] rounded-lg px-5'><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 16.5L9.75 9L2.25 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
      </div>
      <div className='flex gap-1 justify-center items-center'><div className='text-[#B1B1B1]'>Powered by</div><div className='text-[#7A7F8C]'>Krunk.ai</div>
      
      
      <div>
        <img className='h-[40px]' src={logo} alt='logo'/>
      </div>
      
      
      </div>

    </div>
  )
}

export default SelectFilter
