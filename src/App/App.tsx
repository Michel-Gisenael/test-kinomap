import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import css from './App.module.less';
import { store } from '../store'
import { Provider as StoreProvider } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';
import FilterVideo from '../components/FilterVideo';
import VideoList from '../components/VideoList';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => {
    return (
      <StoreProvider store={store}>
        <div {...props} id="app">
          <FilterVideo />
          <VideoList />
          <VideoPlayer />
        </div>
      </StoreProvider>
    )
  }
});

export default SpotlightRootDecorator(ThemeDecorator(App));
