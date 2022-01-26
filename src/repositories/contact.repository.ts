import { DeleteResult, getRepository } from "typeorm";
import { Contact } from "../models/contact.entity";

export interface IContactPayload {
  employeeId: string;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  project: string;
  avatar: string;
}

export const getContacts = async (): Promise<Array<Contact>> => {
  const contactRepository = getRepository(Contact);
  return contactRepository.find();
};

export const createContact = async (
  payload: IContactPayload
): Promise<Contact> => {
  const contactRepository = getRepository(Contact);
  const contact = new Contact();
  return contactRepository.save({
    ...contact,
    ...payload,
  });
};

export const getContact = async (id: string): Promise<Contact | null> => {
  const contactRepository = getRepository(Contact);
  const contact = await contactRepository.findOne({ id: id });
  if (!contact) return null;
  return contact;
};

export const deleteContact = async (id: string): Promise<DeleteResult> => {
  const contactRepository = getRepository(Contact);
  const contact = await contactRepository.delete({ id: id });
  return contact;
};

export const updateContact = async (
  id: string,
  payload: any
): Promise<Contact | null> => {
  const {
    employeeId,
    firstName,
    lastName,
    title,
    department,
    project,
    avatar,
  } = payload;
  const contactRepository = getRepository(Contact);
  const contact = await contactRepository.findOne({ id: id });
  if (!contact) return null;
  return contactRepository.save({
    ...contact,
    employeeId,
    firstName,
    lastName,
    title,
    department,
    project,
    avatar,
  });
};
