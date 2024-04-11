import React, { useRef } from 'react';

const Horizontalscroll = () => {
  const containerRef = useRef(null);

  const scrollTo = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };
  const data=["Clutch","Baggit","Fabric_lining","Multipurpose","extra1","extra2","extra3" ,"extra4","extra5","extra4","extra5","extra4","extra5","extra4","extra5","extra4","extra5"]

  return (<div>
    <div className='text-[#949494] text-left'>Popular tags for handbag</div>
    <div className="flex text-left flex-col overflow-x-auto">
      
      <div className="flex  items-center space-x-4 p-4" ref={containerRef}>
        {data.map((_, index) => (
          <div
            key={index}
            className=" h-[30px] w-[200px] text-[#4C82EF]  border-[#4C82EF] border-[1.5px] rounded-md px-4 bg-[#F2F7FF] items-center justify-center cursor-pointer"
            onClick={() => console.log(`Clicked item ${index}`)}
          >
           {data[index]}
          </div>
        ))}
      </div>
      
    </div></div>
  );
};

export default Horizontalscroll;
