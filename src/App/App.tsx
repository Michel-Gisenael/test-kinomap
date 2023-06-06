import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import VideoList from '../components/VideoList';
import css from './App.module.less';
import FilterVideo from '../components/FilterVideo';
import { store } from '../store'
import { Provider as StoreProvider } from 'react-redux';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
    <StoreProvider store={store}>
      <div {...props}>
        <FilterVideo />
        <VideoList />
      </div>
    </StoreProvider>
	)
});

export default ThemeDecorator(App);
