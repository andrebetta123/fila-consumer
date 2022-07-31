import 'reflect-metadata';
import { Candidate } from '../entity/candidate.entity';
import { DataSource } from 'typeorm';
import { Vote } from '../entity/vote.entity';
import configs from '../configs';

const AppDataSource = new DataSource({
  ...(configs.mysql as any),
  synchronize: true,
  entities: [Candidate, Vote],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('MYSQL conectado com sucesso :)');
  })
  .catch((error) => {
    console.error('Falha ao conectar ao MYSQL');
    console.error(error);
  });

export default AppDataSource;
