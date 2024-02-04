import { useForm } from 'react-hook-form';

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => {
		return null;
	};

	return (
		<div className="flex">
			<div className="flex-order-1">
				<form onSubmit={handleSubmit(onSubmit)} className="grid">
					<div>
						<input placeholder="First Name" type="text" {...register('firstName', { required: true })} />
						<span>First Name</span>
						<p>{errors.firstName && 'This field is required'}</p>
					</div>

					<div>
						<input placeholder="Last Name" type="text" {...register('lastName', { required: true })} />
						<span>Last Name</span>
						<p>{errors.lastName && 'This field is required'}</p>
					</div>

					<div>
						<input placeholder="Email" type="text" {...register('email', { required: true })} />
						<span>Email</span>
						<p>{errors.email && 'This field is required'}</p>
					</div>

					<div>
						<input placeholder="Phone" type="text" {...register('phone', { required: true })} />
						<span>Phone</span>
						<p>{errors.email && 'This field is required'}</p>
					</div>

					<div>
						<select name="" title="Please select one">
							<option value="">Please select one</option>
							<option value="Internet">INTERNET</option>
						</select>
					</div>

					<div className="grid-columns-span">
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
			</div>
		</div>
	);
};

export default RegisterForm;
