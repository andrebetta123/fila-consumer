import { Vote } from '../entity/vote.entity';
import Mysql from '../mysql';

export const userRepository = Mysql.getRepository(Vote);
