const validation = new JustValidate('#form');

// Validation
validation
  .addField('#username', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Username is required',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);
validation
  .addField('#response', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 500,
    },
  ])
  .addRequiredGroup('#placesDiv');

validation
  .addField('#offers1', [
    {
      rule: 'required',
      errorMessage: 'confirme os termos de contrato',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });
