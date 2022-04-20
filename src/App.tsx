import { FC } from 'react';

import { withShell } from '~/hoc/with-shell';
import MainPage from '~/pages/main/MainPage';

const App: FC = () => {
  return <MainPage />;
};

export default withShell(App);
