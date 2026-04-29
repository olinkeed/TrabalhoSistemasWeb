import { AppDataSource } from "@shared/typeorm/data-source";
import Atleta from "../typeorm/entities/Atleta";
import AppError from "@shared/errors/AppError";

interface IRequest {
  nome: string;
  data_nascimento: string;
  sexo: string;
  nacionalidade: string;
  peso: number;
  altura: number;
}

export default class CreateAtletaService {
  public async execute({
    nome,
    data_nascimento,
    sexo,
    nacionalidade,
    peso,
    altura,
  }: IRequest): Promise<Atleta> {
    const atletaRepository = AppDataSource.getRepository(Atleta);

    const atletaExists = await atletaRepository.findOne({ where: { nome } });
    if (atletaExists) {
      throw new AppError("Já existe um atleta cadastrado com este nome.");
    }

    const atleta = atletaRepository.create({
      nome,
      data_nascimento,
      sexo,
      nacionalidade,
      peso,
      altura,
    });

    await atletaRepository.save(atleta);
    return atleta;
  }
}
