import * as functions from 'firebase-functions';
import { IAppDbContact } from '../services/contact/contact.models';
import { ContactService } from '../services/contact/contact.service';


export const oncontactAdded = functions.firestore.document('/users/{useId}/contacts/{contactId}').onCreate(async (snapshot, context) => {
  const data = snapshot.data() as IAppDbContact;
  const service = new ContactService();
  await service.onCreate(data);
});
