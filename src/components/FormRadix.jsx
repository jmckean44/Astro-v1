import React from 'react';
import { useForm } from 'react-hook-form';
import FormCheckboxes from './FormCheckboxes.jsx';
import FormRadios from './FormRadios.jsx';
import SelectDropDown from './FormSelect.jsx';

function RegisterForm() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(JSON.stringify(data));
			//throw new Error();
		} catch (error) {
			setError('root', {
				//message: 'Error message...',
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid">
			<div>
				<label htmlFor="firstName" className="visuallyhidden">
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					placeholder="First Name *"
					//aria-invalid={errors.name ? 'true' : 'false'}
					{...register('firstName', {
						required: 'First name is required',
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: 'Please enter a valid first name',
						},
					})}
				/>
				<span className="helperText">First Name *</span>
				{errors.firstName && <p>{errors.firstName.message}</p>}
			</div>

			<div>
				<label htmlFor="lastName" className="visuallyhidden">
					Last Name
				</label>
				<input
					type="text"
					id="lastName"
					placeholder="Last Name *"
					{...register('lastName', {
						required: 'Last name is required',
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: 'Please enter a valid last name',
						},
					})}
				/>
				<span className="helperText">Last Name</span>
				{errors.lastName && <p>{errors.lastName.message}</p>}
			</div>

			<div>
				<label htmlFor="email" className="visuallyhidden">
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="Email *"
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
							message: 'Please enter a valid email',
						},
					})}
				/>
				{errors.email && <p className="errorMsg">{errors.email.message}</p>}
				<span className="helperText">Email</span>
			</div>

			<div>
				<label htmlFor="phone" className="visuallyhidden">
					Phone
				</label>
				<input type="tel" id="phone" placeholder="Phone" {...register('phone')} />
				<span className="helperText">Phone</span>
			</div>

			<div>
				<SelectDropDown />
			</div>

			<div className="grid-columns-span">
				<FormRadios />
			</div>

			<div className="grid-columns-span">
				<FormCheckboxes />
			</div>

			<div className="grid-columns-span">
				<label htmlFor="comments" className="visuallyhidden">
					Comments
				</label>
				<textarea type="text" rows="5" id="comments" placeholder="Comments" {...register('comments')}></textarea>
				<span className="helperText">Comments</span>
			</div>

			{/* {errors.root && <div className="message">{errors.root.message}</div>} */}

			<div className="grid-columns-span">
				<button type="submit" className="button" disabled={isSubmitting}>
					{isSubmitting ? 'Sending...' : 'Submit'}
				</button>
			</div>

			<div>
				<p className="disclaimer">Disclaimer...</p>
			</div>
		</form>
	);
}

export default RegisterForm;
