import { model_Especialidad } from "./model_Especialidad";
import { Model_Medico } from "./model_Medico";
import { Model_Paciente } from "./model_Paciente";

export class model_NewConsulta {
    id_consulta?: number;
    paciente: Model_Paciente = new Model_Paciente;
    medico: Model_Medico = new Model_Medico;
    numConsultorio?: string;
    Especialidad: model_Especialidad = new model_Especialidad;
    fecha?: string | null;
    detalleConsulta?:any; 
}