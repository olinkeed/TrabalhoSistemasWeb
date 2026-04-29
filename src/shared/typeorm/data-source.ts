import "reflect-metadata";
import path from "node:path";
import { DataSource } from "typeorm";
import Atleta from "@modules/atletas/typeorm/entities/Atleta";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "123456",
  database: "api-atletas",
  synchronize: true,
  logging: true,
  entities: [Atleta],
  migrations: [path.join(__dirname, "migrations", "*.ts")],
});
