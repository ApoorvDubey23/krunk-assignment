import React from 'react'
import ChatBoxSelf from './ChatBoxSelf.js'
import ChatBoxOther from './ChatBoxOther.js'
import Horizontalscroll from './horizontalscroll.js'
import CardItem from './CardItem.js'
import SelectFilter from './SelectFilter.js'

function MainSection() {
  return (<div className='flex flex-col p-4 gap-4'>
    <div className=' w-[100%] bg-white flex flex-col'>
      <ChatBoxSelf />
      
      <ChatBoxOther/>
    </div>
    <div>
        <Horizontalscroll/>
    </div>
    <div>
        <CardItem/>
    </div>
    <div>
      <SelectFilter/>
    </div>
    </div>
  )
}

export default MainSection
