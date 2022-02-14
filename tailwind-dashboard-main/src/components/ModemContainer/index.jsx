import React, { useState, useEffect} from 'react';
import { db } from '../../database/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { async } from '@firebase/util';

const ModemContainer = (props) => {  
  console.log(props.props)   
  return (
    <ListarModem props={props}/>
    );
};

const ListarModem = ({props}) => {
  const [ modens, setModens ] = useState([]);
  const [ filter, setFilter ] = useState([]);
  //const [ search, setSearch ] = useState("");
  const modensCollectionRef = collection(db, "modens");  
  
  useEffect(() =>{          
       const getModens = async () => {             
          const data = await getDocs(modensCollectionRef);
          //console.log(data);
          setModens(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));         
          /* const q = query(modensCollectionRef,where("macModem", "==", "B41C3071C5E6"))
          const data = await getDocs(q);
         setModens(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));  */                 
      };      
     getModens();     
  }, [])

  useEffect(() =>{          
    const getModens = async () => {             
       const data = await getDocs(modensCollectionRef);
       //console.log(data);          
       /* const q = query(modensCollectionRef,where("macModem", "==", "B41C3071C5E6"))
       const data = await getDocs(q);
      setModens(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));  */
      setFilter(
       data.docs.map((doc)=> ({...doc.data(), id: doc.id}))         
     )           
   };      
  getModens();     
}, [props.props])

  useEffect(()=>{
    if((props.props === undefined) || (props.props == '')){
      setFilter(
        modens.filter(modem => modem.serieModem != 999999999999 )         
      )
    }else{
      setFilter(
        (modens.filter(modem => modem.macModem == props.props || modem.numTelefone == props.props) )
      )
      
    }
  },[props.props])
  return(
    <div>
        <table className="table-modens">
        <thead>
                <tr>
                  <th className="table-header-empty">
                  <td className="invisible">
                  <td>    
                     <div >
                        <a href="#" className="sidebar-icon ">{<GoPencil/>}</a>
                     </div>                                                       
                    </td> 
                    <td>    
                      <div>
                        <a href="#" className="sidebar-icon ">{<RiDeleteBin6Fill/>}</a>
                      </div>                                                       
                    </td> 
                  </td>
                  </th>
                  <th className="table-modens-header">SERIE</th>
                  <th className="table-modens-header">IMEI </th>
                  <th className="table-modens-header">MAC</th>
                  <th className="table-modens-header">NUM</th>
                  <th className="table-modens-header">COD SIMC</th>
                </tr>
              </thead>
        {filter.map((modem)=>{
          return(           
              <tbody>
                <tr >
                  <td className="table-icons">
                  <td>    
                     <div >
                        <a href="#" className="sidebar-icon">{<GoPencil/>}</a>
                     </div>                                                       
                    </td> 
                    <td>    
                      <div>
                        <a href="#" className="sidebar-icon">{<RiDeleteBin6Fill/>}</a>
                      </div>                                                       
                    </td> 
                  </td>
                  <td className="table-modens-item">{modem.serieModem}</td>
                  <td className="table-modens-item">{modem.imeiModem}</td>
                  <td className="table-modens-item">{modem.macModem}</td>
                  <td className="table-modens-item">{modem.numTelefone}</td>
                  <td className="table-modens-item">{modem.codSimModem}</td>
                </tr> 
              </tbody>                              
            
          );
        })}
        </table>
    </div>
  );
};

export default ModemContainer;
