/* eslint-disable prettier/prettier */
import {getRepository} from "typeorm";
// import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from '../models/user.entity';
import * as bcrypt from 'bcrypt';

export interface IAuthCredential {
  username: string;
  password: string;
}

export const createUser = async (authCredentialDto: IAuthCredential): Promise<void> => {
  const { username, password } = authCredentialDto;
  const salt = await bcrypt.genSalt()
  const hashedPass = await bcrypt.hash(password, salt);

  const user = await getRepository(User).create({ username, password: hashedPass });

  try {
      await getRepository(User).save(user);
  } catch (error:any) {
      if(error.code==='23505'){
          throw Error('Username have already exists')
      } else {
          throw Error('InternalServerErrorException')
      }
  }
}
