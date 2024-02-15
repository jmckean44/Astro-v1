import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import '../styles/form-select.css';

const SelectDropDown = () => (
	<Select.Root name="hear">
		<Select.Trigger className="SelectTrigger" aria-label="How Did You Hear?">
			<Select.Value placeholder="How Did You Hear?" />
			<Select.Icon className="SelectIcon">
				<ChevronDownIcon />
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content className="SelectContent" position="popper" sideOffset={5}>
				<Select.ScrollUpButton className="SelectScrollButton">
					<ChevronUpIcon />
				</Select.ScrollUpButton>
				<Select.Viewport className="SelectViewport">
					<Select.Group>
						{/* <Select.Label className="SelectLabel">How Did You Hear?</Select.Label> */}
						<SelectItem value="Internet">Internet</SelectItem>
						<Select.Separator className="SelectSeparator" />
						<SelectItem value="Magazine">Magazine</SelectItem>
					</Select.Group>
				</Select.Viewport>
				<Select.ScrollDownButton className="SelectScrollButton">
					<ChevronDownIcon />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
	return (
		<Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
			<Select.ItemText>{children}</Select.ItemText>
			<Select.ItemIndicator className="SelectItemIndicator">
				<CheckIcon />
			</Select.ItemIndicator>
		</Select.Item>
	);
});

export default SelectDropDown;
