import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Eye } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Panel General", icon: LayoutDashboard },
    { path: "/asistencias", label: "Registro de Asistencia", icon: Users },
    { path: "/reportes", label: "Reportes y Estadísticas", icon: FileText },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen shadow-xl">
      <div className="p-6 flex items-center space-x-3 border-b border-slate-800">
        <Eye className="w-8 h-8 text-cyan-400" />
        <div>
          <h1 className="font-bold text-white text-lg">ASISTENCIA</h1>
          <span className="text-xs text-cyan-400 font-medium">Modo Solo Vista</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? "bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20" 
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
        Sistema de Visualización v1.0
      </div>
    </aside>
  );
}