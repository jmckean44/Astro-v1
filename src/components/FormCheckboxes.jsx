import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
//import { CheckIcon } from '@radix-ui/react-icons';
import '../styles/form-checkbox.css';

const Checkboxes = () => (
	<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
		<Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
			<Checkbox.Indicator className="CheckboxIndicator">{/* <CheckIcon /> */}</Checkbox.Indicator>
		</Checkbox.Root>
		<label className="Label" htmlFor="c1">
			Checkbox 1
		</label>

		<Checkbox.Root className="CheckboxRoot" defaultChecked id="c2">
			<Checkbox.Indicator className="CheckboxIndicator">{/* <CheckIcon /> */}</Checkbox.Indicator>
		</Checkbox.Root>
		<label className="Label" htmlFor="c2">
			Checkbox 2
		</label>
	</div>
);

export default Checkboxes;
