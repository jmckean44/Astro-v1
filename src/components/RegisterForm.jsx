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
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
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
				<label for="First Name" className="visuallyhidden">
					First Name
				</label>
				<input
					placeholder="First Name"
					type="text"
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
				<label for="Last Name" className="visuallyhidden">
					Last Name
				</label>
				<input
					placeholder="Last Name"
					type="text"
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
				<label for="Email" className="visuallyhidden">
					Email
				</label>
				<input
					placeholder="Email"
					type="text"
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
				<label for="Phone" className="visuallyhidden">
					Phone
				</label>
				<input placeholder="Phone" type="text" {...register('phone')} />
				<span>Phone</span>
			</div>

			<div>
				<label for="Select Options" className="visuallyhidden">
					Please select one
				</label>
				<select name="" title="Please select one">
					<option value="">Please select one</option>
					<option value="Internet">INTERNET</option>
				</select>
			</div>

			<div className="grid-columns-span">
				<label className="label">
					<label for="Radio Buttons" className="visuallyhidden"></label>
					<input className="radio-input" type="radio" name="x" value="Yes" />
					<div className="radio-design"></div>
					<div className="label-text">Radio 1</div>
				</label>
				<label className="label">
					<label for="Radio Button" className="visuallyhidden"></label>
					<input className="radio-input" type="radio" name="x" value="No" />
					<div className="radio-design"></div>
					<div className="label-text">Radio 2</div>
				</label>
			</div>

			<div className="grid-columns-span">
				<label className="label">
					<input type="checkbox" name="Names" value="" className="checkbox-input" />
					<div className="checkbox-design"></div>
					<div className="label-text">Checkbox 1</div>
				</label>

				<label className="label">
					<input type="checkbox" name="Names" value="" className="checkbox-input" />
					<div className="checkbox-design"></div>
					<div className="label-text">Checkbox 2</div>
				</label>
			</div>

			<div className="grid-columns-span">
				<label for="Comments" className="visuallyhidden">
					Comments
				</label>
				<textarea placeholder="Comments" {...register('comments')}></textarea>
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
