import React, { useState,useEffect } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  Background,
  // OnLoadParams,
  // EdgeTypesType,
  // Elements,
  // Connection,
  // Edge,
  ArrowHeadType,
} from 'react-flow-renderer';

import './index.css';

import FloatingEdge from '../../FloatingEdge';
import FloatingConnectionLine from '../../FloatingConnectionLine';
// import { createElements } from '../../utils';
import { MethodsBuild,createElement } from './Build';
const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

// const initialElements = createElements();

const edgeTypes = {
  floating: FloatingEdge,
};


export default function BluePrint() {
    const [Methods,setMethods]=useState(MethodsBuild())
    Methods.map((method)=>{
                
        console.log(method)
    })
    localStorage.setItem("MethodName","");
    const [MethodName,setMethodName]=useState(null)
        localStorage.setItem("ToDepth", 1);
    const [Todepth,setToDepth]=useState(1)
    localStorage.setItem("FromDepth", 1);
    const [Fromdepth,setFromDepth]=useState(1)
    const [elements, setElements] = useState();
    
    useEffect(() => {
        setElements(createElement())
        // return () => {
        //     cleanup
        // }
    }, [])

    const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  
    const onConnect = (params) =>
      setElements((els) => addEdge({ ...params, type: 'floating', arrowHeadType: ArrowHeadType.Arrow }, els));
  
  
      const handleSubmit=(e)=>{
      console.log(e)
    e.preventDefault()
    localStorage.setItem("ToDepth", Todepth);
    localStorage.setItem("FromDepth", Fromdepth);
    if(MethodName!=null)
    localStorage.setItem("MethodName", MethodName);
console.log(parseInt(localStorage.getItem("FromDepth")))
    const ele=createElement()
    console.log(ele)
    setElements(ele)
    // e.preventDefault()
  }
  const updatedList = Methods.map((listItems)=>{
    return(
        <div>
            <label>
       
       <input type="checkbox"  name="name" className="custom-control-input"  id={listItems}
               value={listItems} onChange={(e)=>{
                e.preventDefault()
         setMethodName(e.target.id)
         console.log(e.target.id)
   
       }}/>
       {listItems}
     </label>
        </div>
       
        ); 
});

    return (
      <div className="floatingedges" style={{ height: "100vh", width: "100vw" }}>
      
<div className='Body-Wrapper'>
    <div className='Method-Selection'>

     <form onSubmit={handleSubmit}>
     <ul>{updatedList}</ul>
  <label>
    Calling Depth:
    <input type="text" name="ToDepth"  
    onChange={(e)=>{
        e.stopPropagation();
      setToDepth(parseInt(String(e.target.value)))
      
      console.log(e.target.value)
      e.preventDefault()
    }}
    />
  </label>
  <label>
    Calling From Depth:
    <input type="text" name="FromDepth"  onChange={(e)=>{
        e.stopPropagation();
      setFromDepth(parseInt(String(e.target.value)))
      
      console.log(e.target.value)
      e.preventDefault()
    }}/>
  </label>
  <button  type='submit'>generate</button>

</form>
    </div>

    <div className='React-Flow' style={{ height: "100vh", width: "100vw" }}>
    <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          onLoad={onLoad}
          edgeTypes={edgeTypes}
          connectionLineComponent={FloatingConnectionLine}
        >
          <Background />
        </ReactFlow>
    </div>
</div>
       
      </div>
    );
}


