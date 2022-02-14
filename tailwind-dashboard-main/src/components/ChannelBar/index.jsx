import { useState } from 'react';
import { BsHash, BsList } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { db } from '../../database/firebase';
import { collection, addDoc } from "firebase/firestore";
import  ModemContainer  from "../ModemContainer";
import { render } from "react-dom";
const topics = ['Cadastrar Modem', 'Modem Com Defeito', 'Modens Devolvidos'];
const questions = ['Cadastrar Usuario'];
const random = ['Cadastrar Chip'];

//FireBase
const modensCollectionRef = collection(db, "modens");

const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        <Dropdown header='Cadastrar Modem' selections={topics} />
        <Dropdown header='Cadastrar Usuários' selections={questions} />
        <Dropdown header='Cadastrar Chip' selections={random} />
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
        >
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded &&
        <FormCadastroModem selectionMenu={header} />
      }
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => {
  const [expandedIcon, setExpandedIcon] = useState(true);
  return (
    <div>
      <div className='dropdown-selection'>
        <ChevronIcon expanded={expandedIcon} />
        <h5 className={expandedIcon ? 'dropdown-icon-text-selected' : 'dropdown-icon-text'} onClick={() => setExpandedIcon(!expandedIcon)}>{selection}</h5>
      </div>
      {expandedIcon &&
        <FormCadastroModem selectionMenu={selection} />}
    </div>
  );
};

const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>CONTROLE</h5>
  </div>
);


const Cadastro = (acao) => {
  const [newSerieModem, setNewSerieModem] = useState("");
  const [newImeiModem, setNewImeiModem] = useState("");
  const [newMacModem, setNewMacModem] = useState("");
  const [newNumTelefone, setNewNumTelefone] = useState("");
  const [newCodSimModem, setNewCodSimModem] = useState("");

  const createModem = async () => {
    await addDoc(modensCollectionRef, {
      serieModem: newSerieModem, imeiModem: newImeiModem, macModem: newMacModem,
      numTelefone: newNumTelefone, codSimModem: newCodSimModem
    });
    return(render(
      <ModemContainer props={undefined}/>,
      document.getElementById('containerModem')
    ));  
    
  };  

  switch (acao) {
    case 'Cadastrar Modem':
      return (
        <div className="justify-items-end" >
          <div className='cadastro'>
            <AiOutlineFieldNumber size='18' className='' />
            <input className='search-input' type='text' placeholder='Serie...' name="serieModem"
              onChange={(event) => { setNewSerieModem(event.target.value) }} />
          </div>
          <div className='cadastro'>
            <AiOutlineFieldNumber size='18' className='' />
            <input className='search-input' type='text' placeholder='IMEI...' name="imeiModem"
              onChange={(event) => { setNewImeiModem(event.target.value) }} />
          </div>
          <div className='cadastro'>
            <AiOutlineFieldNumber size='18' className='' />
            <input className='search-input' type='text' placeholder='MAC...' name="macModem"
              onChange={(event) => { setNewMacModem(event.target.value) }} />
          </div>
          <div className='cadastro'>
            <AiOutlineFieldNumber size='18' className='' />
            <input className='search-input' type='text' placeholder='NUM Telefone...' name="numTelefone"
              onChange={(event) => { setNewNumTelefone(event.target.value) }} />
          </div>
          <div className='cadastro'>
            <AiOutlineFieldNumber size='18' className='' />
            <input className='search-input' type='text' placeholder='COD SIMC...' name="codSimModem"
              onChange={(event) => { setNewCodSimModem(event.target.value) }} />
          </div>
          <div className='cadastro-button'>
            <input type="submit" value="Cadastrar" className='cadastro-input' onClick={createModem} />
          </div>
        </div>
      );
    case 'Cadastrar Usuários':
      return (
        <div>
          Cadastro Usuario
        </div>
      );
  };
};

const FormCadastroModem = ({ selectionMenu }) => {

  return (
    <div>
      {Cadastro(selectionMenu)}
    </div>
  );
};


export default ChannelBar;
