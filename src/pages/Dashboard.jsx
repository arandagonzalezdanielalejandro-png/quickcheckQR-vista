import React from "react";
import { initialStats, asistenciaReciente } from "../data/mockData";
import { Users, UserCheck, UserX, Percent } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Panel General de Asistencia</h2>
        <p className="text-slate-500 text-sm">Resumen en tiempo real de los registros actuales (Solo Lectura).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><UserCheck className="w-6 h-6" /></div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">Asistencias Hoy</p>
            <h3 className="text-2xl font-bold text-slate-800">{initialStats.totalAsistenciasHoy}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><UserX className="w-6 h-6" /></div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">Ausentes</p>
            <h3 className="text-2xl font-bold text-slate-800">{initialStats.ausentesHoy}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Users className="w-6 h-6" /></div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">Total Registrados</p>
            <h3 className="text-2xl font-bold text-slate-800">{initialStats.totalRegistrados}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Percent className="w-6 h-6" /></div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase">% Asistencia</p>
            <h3 className="text-2xl font-bold text-slate-800">{initialStats.porcentajeAsistencia}</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-800">Últimos Registros del Día</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Código</th>
                <th className="p-4 font-semibold">Nombre Completo</th>
                <th className="p-4 font-semibold">Curso / Área</th>
                <th className="p-4 font-semibold">Hora</th>
                <th className="p-4 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {asistenciaReciente.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-800">{item.codigo}</td>
                  <td className="p-4">{item.nombre}</td>
                  <td className="p-4">{item.curso}</td>
                  <td className="p-4">{item.hora}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.estado === "Presente" ? "bg-emerald-50 text-emerald-600" :
                      item.estado === "Tardanza" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                    }`}>
                      {item.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}