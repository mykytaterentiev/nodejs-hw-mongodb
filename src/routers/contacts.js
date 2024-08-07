import { Router } from 'express';
import {
  getContactsController,
  getContactsControllerById,
  createContactController,
  deleteContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

const contr = ctrlWrapper(getContactsController);

contactsRouter.get('/contacts', contr);

contactsRouter.get(
  '/contacts/:contactId',
  ctrlWrapper(getContactsControllerById),
);

contactsRouter.post('/contacts', ctrlWrapper(createContactController));

contactsRouter.patch(
  '/contacts/:contactId',
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactByIdController),
);

export default contactsRouter;