import { Get, Route, Tags, Post, Body, Path, Delete, Put } from "tsoa";
import { DeleteResult } from "typeorm";
import { Contact } from "../models/contact.entity";
import {
  createContact,
  getContacts,
  IContactPayload,
  getContact,
  deleteContact,
  updateContact,
} from "../repositories/contact.repository";

@Route("contacts")
@Tags("Contact")
export default class ContactController {
  @Get("/")
  public async getContacts(): Promise<Array<Contact>> {
    return getContacts();
  }

  @Post("/")
  public async createContact(@Body() body: IContactPayload): Promise<Contact> {
    return createContact(body);
  }

  @Get("/:id")
  public async getContact(@Path() id: string): Promise<Contact | null> {
    return getContact(id);
  }

  @Put("/:id")
  public async updateContact(
    @Path() id: string,
    @Body() body: IContactPayload
  ): Promise<Contact | null> {
    return updateContact(id, body);
  }

  @Delete("/:id")
  public async deleteContact(@Path() id: string): Promise<DeleteResult> {
    return deleteContact(id);
  }
}
