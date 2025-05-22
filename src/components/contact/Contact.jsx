import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/validations';
import { ErrorMessage } from './contact.styles';

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onBlur' }); //   Para validar una vez salgas del input

  return (
    <>
      <form onSubmit={handleSubmit()}>
        <h1>Contact Us</h1>

        <div>
          <label htmlFor='name'>First Name*</label>
          <input type='text' {...register('name', FORM_VALIDATIONS.NAME)} />
          {<ErrorMessage>{errors?.name?.message}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor='surname'>Last Name*</label>
          <input type='text' {...register('surname', FORM_VALIDATIONS.NAME)} />
          {<ErrorMessage>{errors?.surname?.message}</ErrorMessage>}
        </div>
        <div>
          <p>Email Adress*</p>
          <input type='text' {...register('email', FORM_VALIDATIONS.EMAIL)} />
          {<ErrorMessage>{errors?.email?.message}</ErrorMessage>}
        </div>
        <div>
          <p>Query Type*</p>
          <input
            type='checkbox'
            {...register('general', FORM_VALIDATIONS.QUERY)}
          />
          <label htmlFor='general'>General Enquiry</label>

          <input
            type='checkbox'
            {...register('support', FORM_VALIDATIONS.QUERY)}
          />
          <label htmlFor='support'>Support Request</label>
        </div>
        <div>
          <p>Message*</p>
          <input
            type='text'
            {...register('message', FORM_VALIDATIONS.MESSAGE)}
          />
        </div>
        <div>
          <input
            type='checkbox'
            {...register('consent', FORM_VALIDATIONS.CONSENT)}
          />
          <label htmlFor='consent'>
            I consent to being contacted by the team *
          </label>
          {<ErrorMessage>{errors?.consent?.message}</ErrorMessage>}
        </div>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default Contact;
