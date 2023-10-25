import React from 'react';
import Sdata from './component/Netflix/Sdata';
import Netflix from './component/Netflix/Netflix';

const Nseries = ()=>{
    return (
        <Netflix
          key={Sdata[1].id}
          sname={Sdata[1].sname}
          imgsrc={Sdata[1].imgscr}
          title={Sdata[1].title}
          link={Sdata[1].link}
        />
)
    }
    export default Nseries;