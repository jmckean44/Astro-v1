import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import '../styles/form-radio.css';

const RadioButtons = () => (
	<RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
		<div>
			<RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
				<RadioGroup.Indicator className="RadioGroupIndicator" />
			</RadioGroup.Item>
			<label className="Label" htmlFor="r1">
				Default
			</label>
		</div>
		<div>
			<RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
				<RadioGroup.Indicator className="RadioGroupIndicator" />
			</RadioGroup.Item>
			<label className="Label" htmlFor="r2">
				Comfortable
			</label>
		</div>
		<div>
			<RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
				<RadioGroup.Indicator className="RadioGroupIndicator" />
			</RadioGroup.Item>
			<label className="Label" htmlFor="r3">
				Compact
			</label>
		</div>
	</RadioGroup.Root>
);

export default RadioButtons;
