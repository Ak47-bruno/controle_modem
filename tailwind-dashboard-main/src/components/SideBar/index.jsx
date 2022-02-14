import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { GoChecklist, GoTools  } from "react-icons/go";
import { MdSimCard } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<AiFillHome size="28" />}  text={"DashBoard"}/>
        <Divider />
        <SideBarIcon icon={<GoChecklist size="30" />} text={"Devolvidos"} />
        <SideBarIcon icon={<GoTools size="20" />} text={"Defeito"}/>
        <SideBarIcon icon={<MdSimCard size="28" />} text={"Chip"}/>
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text={"Configuração"}/>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
