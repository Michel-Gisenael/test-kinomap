import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import VideoList from '../components/VideoList';
import css from './App.module.less';
import FilterVideo from '../components/FilterVideo';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
      <FilterVideo />
			<VideoList />
		</div>
	)
});

export default ThemeDecorator(App);
