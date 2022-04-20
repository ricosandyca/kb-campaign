import { FC } from 'react';

import { withContainer } from '~/hoc/with-container';

const App: FC = () => {
  return <div>hello world</div>;
};

export default withContainer(App);
