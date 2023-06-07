import kind from "@enact/core/kind";
import Spinner from "@enact/sandstone/Spinner";
import css from './loader.module.less'

const Loader = kind({
  name: 'LoaderComponent',
  styles: {
    css,
    className: 'loadingContainer'
  },
  render: (props) => (
    <div {...props}>
      <Spinner children="Loading" component='Loading data'/>
    </div>
  )
})

export default Loader