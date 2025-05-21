import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/validations';

const Contact = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	return (
		<>
			<form onSubmit={handleSubmit()}>
				<h1>Contact Us</h1>

				<div>
					<label htmlFor='name'>First Name*</label>
					<input type='text' {...register('name', FORM_VALIDATIONS.NAME)} />
					{errors.name && <span>This field is required</span>}
				</div>
				<div>
					<label htmlFor='surname'>Last Name*</label>
					<input type='text' {...register('surname', FORM_VALIDATIONS.NAME)} />
					{errors.surname && <span>This field is required</span>}
				</div>
				<div>
					<p>Email Adress*</p>
					<input type='text' {...register('email', FORM_VALIDATIONS.EMAIL)} />
					{errors.email && <span>Please enter a valid email address</span>}
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
					{errors.consent && <span>This field is required</span>}
				</div>
				<input type='submit' value='Submit' />
			</form>
		</>
	);
};

export default Contact;
