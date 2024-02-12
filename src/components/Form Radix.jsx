import React from 'react';
import { useForm } from 'react-hook-form';
import FormCheckboxes from '../components/FormCheckboxes.jsx';
import FormRadios from '../components/FormRadios.jsx';
import SelectDropDown from '../components/FormSelect.jsx';
import '../styles/form-main.css';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const onError = (errors, e) => console.log(errors, e);

function RegisterForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isDirty },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
		},
	});

	console.log('isDirty', isDirty);

	const onSubmit = async (data) => {
		// const formData = new FormData(e.currentTarget);
		// const email = formData.get('email');
		// for (let [key, value] of formData.entries()) {
		// 	console.log({ key, value });
		// }
		//console.log(watch('firstName'));
		await sleep(1000);
		if (data.firstName === 'bill') {
			alert(JSON.stringify(data));
		} else {
			alert('There is an error');
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid">
			<div>
				<label for="firstName" className="visuallyhidden">
					First Name
				</label>
				<input
					placeholder="First Name"
					type="text"
					id="firstName"
					aria-invalid={errors.name ? 'true' : 'false'}
					{...register('firstName', {
						required: 'First name is required',
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: 'Please enter a valid first name',
						},
					})}
				/>
				<span className="helperText">First Name</span>
				{errors.firstName && <p>{errors.firstName.message}</p>}
			</div>

			<div>
				<label for="lastName" className="visuallyhidden">
					Last Name
				</label>
				<input
					placeholder="Last Name"
					type="text"
					id="lastName"
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
				<label for="email" className="visuallyhidden">
					Email
				</label>
				<input
					placeholder="Email"
					type="text"
					id="email"
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
				<label for="phone" className="visuallyhidden">
					Phone
				</label>
				<input placeholder="Phone" type="text" id="phone" {...register('phone')} />
				<span className="helperText">Phone</span>
			</div>

			<div>
				<SelectDropDown />
				{/* <label for="selectName" className="visuallyhidden">
					Please select one
				</label>
				<select name="select" id="selectName" title="Please select one">
					<option value="">Please select one</option>
					<option value="Internet">INTERNET</option>
				</select> */}
			</div>

			<div className="grid-columns-span">
				<FormRadios />
				{/* <label className="label">
					<label for="radioName1" className="visuallyhidden">
						radioName1
					</label>
					<input className="radio-input" type="radio" name="radioName" id="radioName1" value="Yes" />
					<div className="radio-design"></div>
					<div className="label-text">Radio 1</div>
				</label>
				<label className="label">
					<label for="radioName2" className="visuallyhidden">
						radioName2
					</label>
					<input className="radio-input" type="radio" name="radioName" id="radioName2" value="No" />
					<div className="radio-design"></div>
					<div className="label-text">Radio 2</div>
				</label> */}
			</div>

			<div className="grid-columns-span">
				<FormCheckboxes />
				{/* <label for="checkboxName1" className="visuallyhidden">
					checkboxName1
				</label>
				<label className="label" for="checkboxName1">
					<input type="checkbox" name="checkboxName" id="checkboxName1" value="" className="checkbox-input" />
					<div className="checkbox-design"></div>
					<div className="label-text">Checkbox 1</div>
				</label>

				<label for="checkboxName2" className="visuallyhidden">
					checkboxName2
				</label>
				<label className="label margin-left" for="checkboxName2">
					<input type="checkbox" name="checkboxName" id="checkboxName2" value="" className="checkbox-input" />
					<div className="checkbox-design"></div>
					<div className="label-text">Checkbox 2</div>
				</label> */}
			</div>

			<div className="grid-columns-span">
				<label for="comments" className="visuallyhidden">
					Comments
				</label>
				<textarea placeholder="Comments" id="comments" {...register('comments')}></textarea>
				<span className="helperText">Comments</span>
			</div>

			<div className="grid-columns-span">
				<button type="submit" className="button">
					Submit
				</button>
			</div>

			<div>
				<p className="disclaimer">Disclaimer...</p>
			</div>
		</form>
	);
}

export default RegisterForm;
