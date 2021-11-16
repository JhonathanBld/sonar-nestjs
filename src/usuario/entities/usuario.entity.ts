import { Atendente } from "src/atendente/entities/atendente.entity";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";


export class Usuario {
    id?: number ;
    nome: string;
    email?: string;
    senha?: string;
    ativo?: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    atendente?: Atendente[];
    cliente?: Cliente[];
    grupo?: Grupo[];
    
}
