import { defineBoolean, defineInt, defineSecret, defineString } from 'firebase-functions/params';


// export const secretVariables = [
//   'EMAIL_HOST',
//   'EMAIL_PORT',
//   'EMAIL_HOST_USER',
//   'EMAIL_HOST_PASSWORD',
//   'EMAIL_USE_SECURE',
//   'EMAIL_USE_TLS',
//   'EMAIL_USE_SSL',
//   'TWILIO_ACCOUNT_SID',
//   'TWILIO_AUTH_TOKEN',
//   'TWILIO_NUMBER',
// ];

export const pubsubTopicForAppLog = defineString('TOPIC_FOR_APP_LOG', {
  default: 'TOPIC_APP_LOG',
  description: 'Topic for app log',
});

export const appEmailHost = defineString('EMAIL_HOST', {
  default: 'smtp.gmail.com',

});

export const appEmailPort = defineInt('EMAIL_PORT', {
  default: 587,
  input: {
    select: {
      options: [
        { label: 'Gmail (587)', value: 587 },
      ],
    },
  },
});

export const appEmailUser = defineSecret('EMAIL_HOST_USER');

export const appEmailPassword = defineSecret('EMAIL_HOST_PASSWORD');

export const appEmailSecure = defineBoolean('EMAIL_USE_SECURE', {
  default: true,
  input: {
    select: {
      options: [
        { label: 'true', value: true },
        { label: 'false', value: false },
      ],
    },
  },
  description: 'Send email in secure way',
});

export const appEmailTLS = defineBoolean('EMAIL_USE_TLS', {
  default: true,
  input: {
    select: {
      options: [
        { label: 'true', value: true },
        { label: 'false', value: false },
      ],
    },
  },
  description: 'Send email using TLS',
});

export const appEmailSSL = defineBoolean('EMAIL_USE_SSL', {
  default: true,
  input: {
    select: {
      options: [
        { label: 'true', value: true },
        { label: 'false', value: false },
      ],
    },
  },
  description: 'Send email using SSL',
});

export const appTwilioAccountSID = defineSecret('TWILIO_ACCOUNT_SID');

export const appTwilioAthenticationToken = defineSecret('TWILIO_AUTH_TOKEN');

export const appTwilioNumber = defineSecret('TWILIO_NUMBER');

// const appEmailHost = defineString('EMAIL_HOST', {
//   default: 'smtp.gmail.com',
//   input: {
//     text: {
//       validationRegex: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
//       validationErrorMessage: 'Please enter a valid email address',
//     },
//   },
// });

// const appEmailPort = defineString('EMAIL_PORT', {
//   default: '587',
//   input: {
//     select: {
//       options: [
//         { label: 'Default (25)', value: '25' },
//         { label: 'gmail', value: '587' },
//       ],
//     },
//   },
// });

// const appEmailUser = defineString('EMAIL_HOST_USER', {
//   input: {
//     text: {
//       validationRegex: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
//       validationErrorMessage: 'Please enter a valid email address',
//     },
//   },
//   description: 'Email or user name for email host',
// });

// const appEmailPassword = defineString('EMAIL_HOST_PASSWORD', {
//   description: 'User password for email host',
// });

// const appEmailSecure = defineString('EMAIL_USE_SECURE', {
//   input: {
//     select: {
//       options: [
//         { label: 'y', value: 'true' },
//         { label: 'n', value: 'false' },
//       ],
//     },
//   },
//   description: 'Send email in secure way',
// });

// const appEmailTLS = defineString('EMAIL_USE_TLS', {
//   input: {
//     select: {
//       options: [
//         { label: 'y', value: 'true' },
//         { label: 'n', value: 'false' },
//       ],
//     },
//   },
//   description: 'Send email using TLS',
// });

// const appEmailSSL = defineString('EMAIL_USE_SSL', {
//   input: {
//     select: {
//       options: [
//         { label: 'y', value: 'true' },
//         { label: 'n', value: 'false' },
//       ],
//     },
//   },
//   description: 'Send email using SSL',
// });

// const appTwilioAccountSID = defineString('TWILIO_ACCOUNT_SID', {
//   description: 'Twilio account SID',
// });

// const appTwilioAthenticationToken = defineString('TWILIO_AUTH_TOKEN', {
//   description: 'Twilio authentication token',
// });

// const appTwilioNumber = defineString('TWILIO_NUMBER', {
//   description: 'Twilio associated number',
// });


