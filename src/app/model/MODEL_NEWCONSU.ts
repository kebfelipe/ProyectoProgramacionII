import { model_Examen } from "./model_examen";
import { model_NewConsulta } from "./model_NewConsulta";

export class MODEL_NEWCONSU {
    consulta: model_NewConsulta = new model_NewConsulta;
    lstExamen: Array<model_Examen> = [];
}