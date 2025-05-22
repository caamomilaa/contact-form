const messages = {
  name: {
    required: 'This field is required',
    wrong: 'Invalid name'
  },
  email: {
    required: 'This field is required',
    wrong: 'Please enter a valid email address'
  },
  query: {
    selection: 'Please select a query type'
  },
  message: {
    required: 'This field is required'
  },
  consent: {
    selection: 'To submit this form, please consent to being contacted'
  }
};

const patterns = {
  onlyLetters: /^[A-Za-z]+$/,
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
};

const nameValidation = {
  required: messages.name.required,
  pattern: {
    value: patterns.onlyLetters,
    message: messages.name.wrong
  }
};
const emailValidation = {
  required: messages.email.required,
  pattern: {
    value: patterns.email,
    message: messages.email.wrong
  }
};
const queryValidation = {
  required: messages.query.selection
  //no se si vale la pena poner el texto arriba y esta linea aqui o mejor ponerlo todo junto
};
const messageValidation = {
  required: messages.message.required
};
const consentValidation = {
  required: messages.consent.selection
};

export const FORM_VALIDATIONS = {
  NAME: nameValidation,
  EMAIL: emailValidation,
  QUERY: queryValidation,
  MESSAGE: messageValidation,
  CONSENT: consentValidation
  //por qué name en mayus?
};

//VALIDACIONES

//vacío
///email valido
//sleccionar una opcion con require
//vacio
//seleccionar opcion
