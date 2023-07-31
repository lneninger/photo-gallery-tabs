import * as admin from 'firebase-admin';


(async () => {
  const auth = admin.auth();
  const email = 'test@test.com';
  const password = 'password';
  await auth.createUser({
    email,
    emailVerified: true,
    phoneNumber: '+11234567890',
    password,
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  });
})();
