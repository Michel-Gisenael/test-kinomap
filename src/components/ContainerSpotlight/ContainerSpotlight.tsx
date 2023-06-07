import kind from '@enact/core/kind';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import { ReactNode } from 'react';
import { JsxElement } from 'typescript';

/**
 * this components is to separate different components in spotlight container
 * so it can be enabled or disabled separately depending on logics
 * when disabled the spottable bloc can't be navigable
 */

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