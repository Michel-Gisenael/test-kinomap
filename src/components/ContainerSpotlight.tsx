import kind from '@enact/core/kind';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import { ReactNode } from 'react';
import { JsxElement } from 'typescript';

interface Props {
  children: JsxElement | ReactNode
}

const Container = SpotlightContainerDecorator(kind<Props>({
	name: 'Container',
	render: ({ children, ...rest }) => {
		return (
			<div {...rest}>
				{children}
			</div>
		);
	}
}));

export default Container