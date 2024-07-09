import React, { Component, useState } from "react";
import "../Dashboard/Dashboard.css";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from 'react-modal';
const Dashboard = () => {
  const [components,setComponents] = useState([
    {
      name: "Navbar",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 0,
    },
    {
      name: "Sidebar",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 1,
    },
    {
      name: "Header",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 2,
    },
    {
      name: "Footer",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 3,
    },
    {
      name: "Input",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 4,
    },
    {
      name: "Calendar",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 5,
    },
    {
      name: "Dropdown",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 6,
    },
    {
      name: "LMS",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 7,
    },
    {
      name: "TMS",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 8,
    },
    {
      name: "Navbar",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 9,
    },
    {
      name: "Sidebar",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 10,
    },
    {
      name: "Header",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id:11,
    },
    {
      name: "Footer",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 12,
    },
    {
      name: "Input",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 13,
    },
    {
      name: "Calendar",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 14,
    },
    {
      name: "Dropdown",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 15,
    },
    {
      name: "LMS",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 16,
    },
    {
      name: "TMS",
      tags: "Business,Ecommerce",
      desc: "One foot in front of the other, One more step, and then one more. Jacks only thoughts were to keep moving no matter how much his body screamed to stop and rest. Hes lost almost all his energy and his entire body ached beyond belief, but he forced himself to take another step. Then another. And then one more",
      technology: "HTML, CSS, JAVASCRIPT, REACT JS",
      id: 17,
    },
  ]);
  const [editModal,setEditModal] = useState(false)
  const [editItemObj,setEditItemObj] = useState({})
  const [updateItemId,setUpdateItemId] = useState()
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"40%"
    },
  };
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.clear()
    navigate('/login')
  }
  const handleDeleteComponent = (item) => {
    const updatedComponents = components.filter((comp) => comp.id !== item.id);
    setComponents(updatedComponents);
  };
  const handleEditComponent = (item) => {
    setEditItemObj(item)
    setEditModal(true)
  }
  const handleInputChange = (e,field) => {
    setEditItemObj({...editItemObj,[field]:e?.target?.value})
  }
  const handleUpdateComponent = () => {
    const updatedComponents = components.map((item) =>
      item.id === editItemObj?.id ? editItemObj : item
    );
    setComponents(updatedComponents);
    setEditModal(false);
  }
  return (
  <div>
    <h1 className="dbHeading">Oragnizational Component Repository</h1>
    <span className="lgOutBtn" onClick={handleLogout}><IoMdLogOut /> Logout</span>
    <span className="helloUser">Hello, {sessionStorage?.getItem('username')?.toUpperCase()}</span>
    <div className="cardsOuterDiv">
      {
      components?.map((item,ind)=>{
        return(
          <div className="cardsDiv">
          <div className="cardName">{item?.name}</div>
          <div><span className="labelName">Tags:</span> {item?.tags}</div>
          <div><span className="labelName">Technology:</span> {item?.technology}</div>
          <div className="descLabel"><span className="labelName">Description:</span> {item?.desc}</div>
          <div className="actionIcons">
          <span onClick={()=>handleEditComponent(item)}><FaEdit/></span>
          <span onClick={()=>handleDeleteComponent(item)}><MdDelete/></span>
          </div>
          </div>
        )
      })
    }
    </div>
    <Modal
        isOpen={editModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={()=>setEditModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
      <button className="crossBtn" onClick={()=>setEditModal(false)}>X</button>
      <div className="modalFieldsDiv">
      <div className='ocrFieldDiv'>
        <label>Component Name:</label>
        <input type='text' value={editItemObj?.name} onChange={(e)=>handleInputChange(e,'name')}/>
      </div>
      <div className='ocrFieldDiv'>
        <label>Tags:</label>
        <input type='text' value={editItemObj?.tags} onChange={(e)=>handleInputChange(e,'tags')}/>
      </div>
      <div className="ocrFieldDiv">
      <label>Technology:</label>
      <input type='text' value={editItemObj?.technology} onChange={(e)=>handleInputChange(e,'technology')}/>
      </div>
      <div className="ocrFieldDiv">
      <label>Description:</label>
      <textarea rows={8} onChange={(e)=>handleInputChange(e,'desc')}>{editItemObj?.desc}</textarea>
      </div>
      <div className='lgnBtnDiv updateBtn'>
        <button onClick={handleUpdateComponent}>Update</button>
      </div>
      </div>
    </Modal>
  </div>);
};

export default Dashboard;
