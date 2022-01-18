import React from 'react'
import ReactFlow from "react-flow-renderer";
import {useState, useContext,useEffect} from 'react'
import { AuthContext } from '../../Context/AuthContext';
import FolderTree, { testData } from 'react-folder-tree';
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact, DiGo,DiJava } from "react-icons/di";
import "./Daigram.css";
import { useNavigate } from 'react-router-dom';

  
  
export default function Daigram() {
    const {  dispatch } = useContext(AuthContext)
const FILE_ICONS = {
    js: <DiJavascript1 />,
    css: <DiCss3Full />,
    html: <DiHtml5 />,
    jsx: <DiReact />
  };
  
  const StyledTree = styled.div`
    line-height: 1.5;
  `;
  const StyledFile = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  `;
  const StyledFolder = styled.div`
    padding-left: 20px;
  
    .folder--label {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  `;
  const Collapsible = styled.div`
    height: ${p => (p.isOpen ? "auto" : "0")};
    overflow: hidden;
  `;
  
  const File = ({ name }) => {
    let ext = name.split(".")[1];
  
    return (
      <StyledFile>
        {/* render the extension or fallback to generic file icon  */}
        {FILE_ICONS[ext] || <AiOutlineFile />}
        <input type="radio" onClick={
          (e)=>{
            go(name)
            // e.preventDefault()
          }
        
        }/>
        <a name={name} onClick={
          (e)=>{
            go(name)
          }
        
        }>{name}</a>
      </StyledFile>
    );
  };
  
  const go=(e)=>{
     console.log(e+'sad')
     localStorage.setItem("SelectedFile", JSON.stringify(e));
    //  dispatch({ type: "Create_Selected_FileName", payload: {FileName:FileName,SelectedFile:e} })
  }
  const Folder = ({ name, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
    return (
      <StyledFolder>
        <div className="folder--label" onClick={handleToggle}>
          <AiOutlineFolder />
          <span>{name}</span>
        </div>
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      </StyledFolder>
    );
  };
  
  const TreeRecursive = ({ data }) => {
    // loop through the data
    return data.map(item => {
      // if its a file render <File />
      if (item.type === "file") {
        return <File name={item.name} />;
      }
      // if its a folder render <Folder />
      if (item.type === "folder") {
        return (
          <Folder name={item.name}>
            {/* Call the <TreeRecursive /> component with the current item.childrens */}
            <TreeRecursive data={item.childrens} />
          </Folder>
        );
      }
    });
  };
  const Tree = ({ data, children }) => {
    const isImparative = data && !children;
  
    return (
      <StyledTree>
        {isImparative ? <TreeRecursive data={data} /> : children}
      </StyledTree>
    );
  };
  
  Tree.File = File;
  Tree.Folder = Folder;
  const navigate = useNavigate();
    const strut=JSON.parse(localStorage.getItem('myStorage'));
    const struc=strut["json"]
    console.log(struc)
    const onTreeStateChange = (state, event) => console.log(state, event);
    const { FileName,SelectedFile } = useContext(AuthContext)
    // useEffect(()=>{
    //     console.log(FileName)
    //     const data={
    //         path:FileName
    //       }
    //       fetch("http://localhost:8080/getFileJson",{
    //        method: 'POST',
    //        headers: {
    //          'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify(data),
    //      }).then((response) => response.json())
    //      //Then with the data from the response in JSON...
    //      .then((data) => {
    //        console.log('Success:', data);
    //      })
    // },[])
    return (
    //     <div>
    //            <>
    //   <div style={{ height: "100vh", width: "150vw" }}>
    //     <ReactFlow elements={elementOne} />
    //   </div>
    // </>
    //     </div>
    <div className="App container">
    <Tree data={struc} />
    <button onClick={(e)=>{
        console.log(JSON.parse(localStorage.getItem("SelectedFile")))
        console.log(FileName['FileName'])
        const data={
            path:FileName['FileName']
          }
          fetch("http://localhost:8080/getJson",{
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
         }).then((response) => response.json())
         //Then with the data from the response in JSON...
         .then((data) => {
            localStorage.setItem("MethodName", null);
            localStorage.setItem("Depth", 1);
             localStorage.setItem('SequenceJson', JSON.stringify(data));
             navigate('/Blueprint')
           console.log('Success:', data);
         })
        
    }}>generate</button>
  </div>
    )
}
