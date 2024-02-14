import React from 'react';
import { useForm } from 'react-hook-form';

//formState: { errors, touchFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, submitCount }
//console.log({ submitCount });

// let renderCount = 0;
// renderCount++;
// <p>({renderCount / 2})</p>

// const RegisterForm = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		watch,
// 		formState: { errors },
// 	} = useForm();

// const onSubmit = (data) => {
// 	console.log('Form submitted!', data);
// 	return null;
// };

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const onError = (errors, e) => console.log(errors, e);

function RegisterForm() {
	const {
		register,
		handleSubmit,
		//getValues,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await sleep(1000);
		if (data.firstName === 'jeff') {
			console.log(JSON.stringify(data));
		} else {
			console.log('There is an error');
		}
	};

	// const checkboxValues = () => {
	// 	console.log(getValues(['email']));
	// };

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
					{...register('firstName', {
						required: 'First name is required',
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: 'Please enter a valid first name',
						},
					})}
				/>
				<span>First Name</span>
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
				<span>Last Name</span>
				{errors.lastName && <p>{errors.lastName.message}</p>}
			</div>

			<div>
				<label for="email" className="visuallyhidden">
					Email
				</label>
				<input
					placeholder="Email"
					type="email"
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
				<span>Email</span>
			</div>

			<div>
				<label for="phone" className="visuallyhidden">
					Phone
				</label>
				<input placeholder="Phone" type="tel" id="phone" {...register('phone')} />
				<span>Phone</span>
			</div>

			<div>
				<label for="selectName" className="visuallyhidden">
					Please select one
				</label>
				<select name="select" id="selectName" title="Please select one" {...register('select')}>
					<option value="">Please select one</option>
					<option value="Internet">INTERNET</option>
				</select>
			</div>

			<div className="grid-columns-span">
				<label className="label">
					<label for="radioName1" className="visuallyhidden">
						radioName1
					</label>
					<input className="radio-input" type="radio" name="radioName" id="radioName1" value="Yes" {...register('radioName')} />
					<div className="radio-design"></div>
					<div className="label-text">Radio 1</div>
				</label>
				<label className="label">
					<label for="radioName2" className="visuallyhidden">
						radioName2
					</label>
					<input className="radio-input" type="radio" name="radioName" id="radioName2" value="No" {...register('radioName')} />
					<div className="radio-design"></div>
					<div className="label-text">Radio 2</div>
				</label>
			</div>

			<div className="grid-columns-span">
				<label for="checkboxName1" className="visuallyhidden">
					checkboxName1
				</label>
				<label className="label" for="checkboxName1">
					<input type="checkbox" name="checkboxes" id="checkboxName1" value="" className="checkbox-input" {...register('checkboxes')} />
					<div className="checkbox-design"></div>
					<div className="label-text">Checkbox 1</div>
				</label>

				<label for="checkboxName2" className="visuallyhidden">
					checkboxName2
				</label>
				<label className="label margin-left" for="checkboxName2">
					<input type="checkbox" name="checkboxes" id="checkboxName2" value="" className="checkbox-input" {...register('checkboxes')} />
					<div className="checkbox-design"></div>
					<div className="label-text">Checkbox 2</div>
				</label>
			</div>

			<div className="grid-columns-span">
				<label for="comments" className="visuallyhidden">
					Comments
				</label>
				<textarea placeholder="Comments" typ="text" id="comments" rows="5" {...register('comments')}></textarea>
				<span>Comments</span>
			</div>

			<div className="grid-columns-span">
				<button type="submit">Submit</button>
			</div>

			<div>
				<p className="disclaimer">Disclaimer...</p>
			</div>
		</form>
	);
}

export default RegisterForm;
