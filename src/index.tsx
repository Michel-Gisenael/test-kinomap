import {createRoot, hydrateRoot} from 'react-dom/client';
import Spotlight from '@enact/spotlight'
import App from './App';
import './assets/css/main.css'

const appElement = (<App />);

Spotlight.add({

})

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	const container = document.getElementById('root')!;

	// @ts-ignore
	if (ENACT_PACK_ISOMORPHIC) {
		hydrateRoot(container, appElement);
	} else {
		createRoot(container).render(appElement);
	}
}

export default appElement;
