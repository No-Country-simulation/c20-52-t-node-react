import React from "react";
import { FaHome, FaUserNurse, FaMapMarkerAlt, FaStethoscope, FaUserInjured, FaUsers, FaHandHoldingMedical, FaSignOutAlt, FaCalendar } from "react-icons/fa";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface MenuProps {
  name: string;
  lastname: string;
  userRole: "admin" | "user"; //
}

const Sidebar: React.FC<MenuProps> = ({ name, lastname, userRole }) => {

  const renderMenuItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    return (
      <ListItem className="flex items-center p-2 mb-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
        <ListItemIcon className="mr-2">
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} primaryTypographyProps={{ className: "text-gray-700" }} />
      </ListItem>
    );
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="h-full w-64 p-5 bg-gray-100 rounded-lg shadow-md fixed top-0 left-0">
    <div className="flex items-center mb-4">
      <h5 className="mb-0 flex items-center text-gray-800">
        <AccountCircleIcon className="mr-2 text-3xl text-gray-600" />
        <span className="text-xl text-black truncate max-w-xs">
          {name} {lastname}
        </span>
      </h5>
    </div>
  
    <List>
      {renderMenuItem({ icon: <FaHome />, text: "Inicio" })}
      {userRole === "admin" &&
        renderMenuItem({
          icon: <FaUserNurse />,
          text: "Gestión de Profesionales",
        })}
      {userRole === "admin" &&
        renderMenuItem({
          icon: <FaMapMarkerAlt />,
          text: "Gestión de Ubicaciones",
        })}
      {userRole === "admin" &&
        renderMenuItem({
          icon: <FaStethoscope />,
          text: "Gestión de Especialidades",
        })}
      {renderMenuItem({
        icon: <FaUserInjured />,
        text: "Gestión de Pacientes",
      })}
      {userRole === "admin" &&
        renderMenuItem({
          icon: <FaUsers />,
          text: "Gestión de Admins",
        })}
      {userRole === "admin" &&
        renderMenuItem({
          icon: <FaHandHoldingMedical />,
          text: "Gestión de Prestaciones",
        })}
      {renderMenuItem({
        icon: <FaCalendar />,
        text: "Calendario",
      })}
      <ListItem button onClick={handleLogout} className="flex items-center p-2 mb-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
        <ListItemIcon className="mr-2">
          <FaSignOutAlt />
        </ListItemIcon>
        <ListItemText primary="Cerrar Sesión" primaryTypographyProps={{ className: "text-gray-700" }} />
      </ListItem>
    </List>
  </div>
  
  );
};

export default Sidebar;
