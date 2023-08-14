import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { IAppDbContact } from '../services/contact/contact.models';
import { ContactService } from '../services/contact/contact.service';


export const oncontactAdded = onDocumentCreated('/users/{useId}/contacts/{contactId}', async (event) => {
  console.log(event);
  const data = event.data?.data() as IAppDbContact;
  const service = new ContactService();
  await service.onCreate(data);
});
