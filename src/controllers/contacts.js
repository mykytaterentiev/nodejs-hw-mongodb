import {
  createContact,
  deleteContactById,
  getAllContacts,
  getContactById,
  upsertContact,
} from '../services/contacts.js';
import { parseFilters } from '../utils/parseFilters.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = req.query;
  const filter = parseFilters(req.query);

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json({
    status: 200,
    message: 'Successfully get contacts!',
    data: contacts,
  });
};

export const getContactsControllerById = async (req, res) => {
  const id = req.params.contactId;
  console.log(id);
  const contact = await getContactById(id);

  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const { body } = req;
  const contact = await createContact(body);

  res.status(201).json({
    status: 201,
    message: `Successfully created contact!`,
    data: contact,
  });
};

export const patchContactController = async (req, res) => {
  const { body } = req;
  const { contactId } = req.params;
  const { contact } = await upsertContact(contactId, body);

  res.status(200).json({
    status: 200,
    message: `Successfully patched contact!`,
    data: contact,
  });
};

export const deleteContactByIdController = async (req, res) => {
  const id = req.params.contactId;
  await deleteContactById(id);

  res.status(204).send();
};