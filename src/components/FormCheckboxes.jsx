import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import '../styles/form-checkboxes.css';

const Checkboxes = () => (
	<div className="checkboxesContainer">
		<Checkbox.Root className="CheckboxRoot" id="c1" name="checkboxes" value="Checkbox Value 1">
			<Checkbox.Indicator className="CheckboxIndicator">
				<CheckIcon />
			</Checkbox.Indicator>
		</Checkbox.Root>
		<label className="Label" htmlFor="c1">
			Checkbox 1
		</label>

		<Checkbox.Root className="CheckboxRoot" id="c2" name="checkboxes" value="Checkbox Value 2">
			<Checkbox.Indicator className="CheckboxIndicator">
				<CheckIcon />
			</Checkbox.Indicator>
		</Checkbox.Root>
		<label className="Label" htmlFor="c2">
			Checkbox 2
		</label>
	</div>
);

export default Checkboxes;
