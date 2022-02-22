export const contactForInputs = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    label: 'Tell me your name',
    placeholder: 'Name',
    errorMessage: 'Required',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    label: 'Your email address so I can respond',
    placeholder: 'Email address',
    errorMessage: 'Must be a valid email address',
    required: true,
  },
];

export const contactFormInputsFS = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 'email',
    name: '_replyto',
    type: 'email',
    placeholder: 'Email address',
    required: true,
  },
];
