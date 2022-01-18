import { Position, ArrowHeadType, Node, XYPosition } from 'react-flow-renderer';

var methoddepth=new Map()
var methodmap=new Map();
var classmap=new Map()
var Methodposition=new Map()
var ElementsMap=new Map()
var EdgesMap=new Map()
export function MethodsBuild(setMethods){
    const data=JSON.parse(localStorage.getItem("SequenceJson"))
    console.log(data)
    
    const startingClass=String(JSON.parse(localStorage.getItem("SelectedFile")));
    const StartingClass= startingClass.split('.')[0]

    const nodes=data["ClassNodes"];
    const methods=data["MethodNodes"];
    const Methods=[]
    for(var i in nodes){

        for(var j in nodes[i]){
          const classjson=nodes[i]
          if(j===StartingClass){
            for(var k=0;k<classjson[j]["Nodes"].length;k++){
              Methods.push(classjson[j]["Nodes"][k]["MethodName"])
              }
          }
         
        }}
   return Methods
}

const startx=100
const starty=100
var MethodsPositionJson=new Map()
var MethodFlag=new Map()
// let classposition=new Map();
export function build(id,depth,actualdepth,classposition,elements){
  if(id==null) return 
  var methodjson=methodmap.get(String(id))
    var ClassName=methodjson["ClassName"]
    // console.log(ClassName)
    const flagjson={
     "ClassName":ClassName,
      "MethodName":methodjson["MethodName"]
    }
    console.log(flagjson,id,MethodFlag.has(id))
    if(classposition.has(ClassName)){
    //   console.log(ClassName)
    }
    else{
        const l=classposition.size
        const x=(l+1)*250;
        const y=100
        classposition.set(ClassName,{"x":x,"y":y+250})
        Methodposition.set(ClassName,0)
        ElementsMap.set({ id: String(classmap.get(ClassName)["Id"]), data: { label: ClassName }, position: {x,y},style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            
          } },1)
        // elements.push({ id: String(classmap.get(ClassName)["Id"]), data: { label: ClassName }, position: {x,y} });
    }
    
    if(!MethodFlag.has(id)){
   
    MethodFlag.set(id,1)
    const classposjson=classposition.get(ClassName)
    if(methodjson["MethodName"]=="isOver"){
        console.log(classposjson)
    }
    console.log(classposjson)
   
    ElementsMap.set({ id: String(id), data: { label: methodjson["MethodName"] }, position: classposition.get(ClassName)},1)
    // elements.push({ id: String(id), data: { label: methodjson["MethodName"] }, position: classposition.get(ClassName)});
   
    var ypos= classposjson["y"]
   var xpos=classposjson["x"]
   ypos+=250;

   classposition["y"]=ypos

    classposition.set(ClassName,{"x":xpos,"y":ypos})
    }
    if(depth===actualdepth) return 
    for(var i in methodjson["Calling"]){
        var key={
            id:`edge-${id}-${methodjson["Calling"][i]["Id"]}`,
            target: `${methodjson["Calling"][i]["Id"]}`,
            source: `${id}`,
            type: 'floating',
            arrowHeadType: ArrowHeadType.Arrow,
            markerEndId:""
            // label:m.get(arr[k]["Id"])["RetunType"]
          }
    //   console.log(methodjson["Calling"][i])
      if(depth+1<=actualdepth&&EdgesMap.has(key)==false){
          EdgesMap.set(key,1)
        //   EdgesMap.set(`edge-${id}-${methodjson["Calling"][i]["Id"]}`,1)
        // elements.push({
        //               id:`edge-${id}-${methodjson["Calling"][i]["Id"]}`,
        //               target: `${methodjson["Calling"][i]["Id"]}`,
        //               source: `${id}`,
        //               type: 'floating',
        //               arrowHeadType: ArrowHeadType.Arrow,
        //               // label:m.get(arr[k]["Id"])["RetunType"]
        //             });
              }
      
      build(methodjson["Calling"][i]["Id"],depth+1,actualdepth,classposition,elements)
    }
    
}

export function buildcalledfrom(id,depth,actualdepth,classposition,elements,len){
  var methodjson=methodmap.get(String(id))
  var ClassName=methodjson["ClassName"]
  // console.log(ClassName)
  const flagjson={
   "ClassName":ClassName,
    "MethodName":methodjson["MethodName"]
  }
  // console.log(flagjson)
  if(classposition.has(ClassName)){
    console.log(ClassName)
  }
  else{
      const l=classposition.size
      console.log(l)
      const x=(0-l+1+len-1)*250;
      const y=100
      console.log(x,y)
      classposition.set(ClassName,{"x":x,"y":y+250})
      Methodposition.set(ClassName,0)
      ElementsMap.set({ id: String(classmap.get(ClassName)["Id"]), data: { label: ClassName }, position: {x,y} ,
      style: {
        background: '#D6D5E6',
        color: '#333',
        border: '1px solid #222138',
        
      }},1)
      
    //   elements.push({ id: String(classmap.get(ClassName)["Id"]), data: { label: ClassName }, position: {x,y} });
  }
  // var l1=Methodposition.get(ClassName)
  if(!MethodFlag.has(id)){

  MethodFlag.set(id,1)
  const classposjson=classposition.get(ClassName)

  ElementsMap.set({ id: String(id), data: { label: methodjson["MethodName"] }, position: classposition.get(ClassName)},1)
//   elements.push({ id: String(id), data: { label: methodjson["MethodName"] }, position: classposition.get(ClassName)});
  // console.log(classposjson)
  var ypos= classposjson["y"]
 var xpos=classposjson["x"]
 ypos+=250;
//  console.log(ypos)
 classposition["y"]=ypos
//  console.log(classposjson)
  classposition.set(ClassName,{"x":xpos,"y":ypos})
  }
  if(depth===actualdepth) return 
  for(var i in methodjson["CalledFrom"]){
    // console.log(methodjson["CalledFrom"][i])
    const callmethodjson=methodmap.get(String(methodjson["CalledFrom"][i]["Id"]))
    // console.log(callmethodjson["TestFlag"])
    if(callmethodjson["TestFlag"]===0){
        const key={
            id:`edge-${methodjson["CalledFrom"][i]["Id"]}-${id}`,
            target: `${id}`,
            source: `${methodjson["CalledFrom"][i]["Id"]}`,
            type: 'floating',
            arrowHeadType: ArrowHeadType.Arrow,
            
            // label:m.get(arr[k]["Id"])["RetunType"]
          }
    if(depth+1<=actualdepth&&EdgesMap.has(key)==false){
        EdgesMap.set(key,1)
          
    //   elements.push({
    //                 id:`edge-${methodjson["CalledFrom"][i]["Id"]}-${id}`,
    //                 target: `${id}`,
    //                 source: `${methodjson["CalledFrom"][i]["Id"]}`,
    //                 type: 'floating',
    //                 arrowHeadType: ArrowHeadType.Arrow,
                  
    //                 // label:m.get(arr[k]["Id"])["RetunType"]
    //               });
            }
    
            buildcalledfrom(methodjson["CalledFrom"][i]["Id"],depth+1,actualdepth,classposition,elements,len)
          }
          }
}



export function createElement() {
    let elements = [];
  const data=JSON.parse(localStorage.getItem("SequenceJson"))
  console.log(data)
  let classposition=new Map();
  let classpositionofCalledFrom=new Map();
  const startingClass=String(JSON.parse(localStorage.getItem("SelectedFile")));
  const StartingClass= startingClass.split('.')[0]
  const center = { x: 100, y: 100 };
  var x=250;
  var y=100;
  const Todepth=parseInt(localStorage.getItem("ToDepth"))
  const Fromdepth=parseInt(localStorage.getItem("FromDepth"))
  const nodes=data["ClassNodes"];
  const methods=data["MethodNodes"];
  const ActualMethodName=localStorage.getItem("MethodName")
  console.log(ActualMethodName)
  console.log(Todepth)
  console.log(Fromdepth)
  console.log(EdgesMap)
  for(var i in methods)
{
  for(var j in methods[i])
    methodmap.set(String(j),methods[i][j])
}
  
for(var i in nodes){

  for(var j in nodes[i]){
    const classjson=nodes[i]
    classmap.set(j,nodes[i][j])
   
  }}
  for(var i in nodes){
    // console.log(i)
    for(var j in nodes[i]){
      // console.log(j)
    
      const classjson=nodes[i]
      classmap.set(j,nodes[i][j])
      if(j===StartingClass){
        // console.log({ id: `${nodes[i][j]["Id"]}`, data: { label: j }, position: {x,y} })
        ElementsMap.set({ id: `${nodes[i][j]["Id"]}`, data: { label: j }, position: {x,y},  style: {
            background: '#777aac',
            color: '#000',
            border: '1px solid #222138',
            
          } },1)
        // elements.push({ id: `${nodes[i][j]["Id"]}`, data: { label: j }, position: {x,y},  style: {
        //   background: '#D6D5E6',
        //   color: '#333',
        //   border: '1px solid #222138',
          
        // } });
        classposition.set(j,{"x":x,"y":y+250})
        classpositionofCalledFrom.set(j,{"x":x,"y":y+250})
        Methodposition.set(j,0)
        if(ActualMethodName===""){
            for(var k=0;k<classjson[j]["Nodes"].length;k++){  
                build(classjson[j]["Nodes"][k]["id"],0,Todepth,classposition,elements)
                localStorage.setItem("MethodName",classjson[j]["Nodes"][k]["MethodName"]);
                break;
              }
              console.log(classposition)
              for(var k=0;k<classjson[j]["Nodes"].length;k++){
                  buildcalledfrom(classjson[j]["Nodes"][k]["id"],0,Fromdepth,classposition,elements,classposition.size)
              break;  
              }
        }
        else{
            for(var k=0;k<classjson[j]["Nodes"].length;k++){  
                if(classjson[j]["Nodes"][k]["MethodName"]===ActualMethodName){
                build(classjson[j]["Nodes"][k]["id"],0,Todepth,classposition,elements)
              break;}
              }
              console.log(classposition)
              for(var k=0;k<classjson[j]["Nodes"].length;k++){
                if(classjson[j]["Nodes"][k]["MethodName"]===ActualMethodName){
                  buildcalledfrom(classjson[j]["Nodes"][k]["id"],0,Fromdepth,classposition,elements,classposition.size)
              break;  }
              }
        }
        console.log()
        
          console.log(elements)
    
      }
    }}
 
elements=[]
for(var [key,value] of ElementsMap){
    elements.push(key)
}
for(var [key,value] of EdgesMap){
    elements.push(key)
}
console.log(ElementsMap)
console.log(EdgesMap)
console.log(elements)
classposition.clear()
classpositionofCalledFrom.clear()
ElementsMap.clear()
Methodposition.clear()
MethodFlag.clear()
methodmap.clear()
classmap.clear()
EdgesMap.clear()

  

 

  return elements;
}