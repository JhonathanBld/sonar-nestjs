import { Prisma } from ".prisma/client";
import { CreateClienteDto } from "src/cliente/dto/create-cliente.dto";
import { UpdateClienteDto } from "src/cliente/dto/update-cliente.dto";
import { CreateGrupoDto } from "src/grupo/dto/create-grupo.dto";
import { CreateUsuarioDto } from "src/usuario/dto/create-usuario.dto";
import { UpdateUsuarioDto } from "src/usuario/dto/update-usuario.dto";
import { Usuario } from "src/usuario/entities/usuario.entity";

export default class TestUtil {

  static novoGrupoFake(): CreateGrupoDto {
    const grupo = new CreateGrupoDto();    
    grupo.nome = 'Angelo Luz';    
    return grupo;
  }

  static novoUsuarioFake(): CreateUsuarioDto {
    const user = new CreateUsuarioDto();
    user.email = 'valid@email.com';
    user.nome = 'Angelo Luz';
    user.senha = '123';
    user.id_grupo = 1;
    return user;
  }

  static updateUsuarioFake(): UpdateUsuarioDto {
    const user = new UpdateUsuarioDto();    
    user.email = 'valid@email.com';
    user.nome = 'Angelo Luz';
    user.senha = '123';
    user.id_grupo = 1;
    return user;
  }

  static novoClienteFake(): CreateClienteDto {
    const cliente = new CreateClienteDto();    
    cliente.cpf = '000000';
    cliente.usuario = new Usuario();
    return cliente;
  }

  static updateClienteFake(): UpdateClienteDto {
    const cliente = new UpdateClienteDto();    
    cliente.cpf = '000000';
    cliente.usuario = new Usuario();
    return cliente;
  }

}
