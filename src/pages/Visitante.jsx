import {useState, useEffect} from "react";
import { supabase } from "../supabase/supabaseClient";

function Visitante() {
  const [visitante, setVisitante] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [motivo_visita, setMotivo_visita] = useState("");
  const [fecha_visita, setFecha_visita] = useState("");
  const[idEditar, setIdEditar] = useState(false);
  const[editando, setEditando] = useState(null);

  useEffect(()=> {
    obtenerVisitante();
  }, []
  );


    const obtenerVisitante = async()=>{
      const{data, error} =
      await supabase
        .from("visitantes")
        .select("*")

      if(!error){
        setVisitante(data)
      };
    }

    const agregarVisitante = async()=>{
      await supabase
      .from("visitantes")
      .insert([
        {
          nombre: nombre,
          cedula: cedula,
          telefono: telefono,
          correo: correo,
          motivo_visita: motivo_visita,
          fecha_visita: fecha_visita
        }
      ]);
         setNombre("");
         setCedula("");
         setTelefono("");
         setCorreo("");
         setMotivo_visita("");
         setFecha_visita("");
         obtenerVisitante();
    };

    const eliminarVisitante = async(id) =>{
      await supabase
      .from("visitantes")
      .delete()
      .eq("id", id)

      obtenerVisitante();
    }

    const cargarVisitante = async(v)=>{
      setNombre(v.nombre);
      setCedula(v.cedula);
      setTelefono(v.telefono);
      setCorreo(v.correo);
      setMotivo_visita(v.motivo_visita);
      setFecha_visita(v.fecha_visita);
      setEditando(true);
    };

    const actualizarVisitante= async (visitante)=>{
      await supabase
         .from("visitantes")
         .update({
          nombre: nombre,
          cedula: cedula,
          telefono: telefono,
          correo: correo,
          motivo_visita: motivo_visita,
          fecha_visita: fecha_visita
         });

         setNombre("");
         setCedula("");
         setTelefono("");
         setCorreo("");
         setMotivo_visita("");
         setFecha_visita("");
         
         obtenerVisitante();
    };

    const guardar =(e) =>{
      e.preventDefault();
      if(editando){
        actualizarVisitante();
      }else{
        agregarVisitante();
      }
    };
  
    return (
      <>
        <h2>Listado de Visitantes</h2>
  
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Cedula</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Motivo Visita</th>
              <th>Fecha Visita</th>
            </tr>
          </thead>
  
          <tbody>
            {visitante.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.nombre}</td>
                <td>{v.cedula}</td>
                <td>{v.telefono}</td>
                <td>{v.correo}</td>
                <td>{v.motivo_visita}</td>
                <td>{v.fecha_visita}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  export default Visitante;