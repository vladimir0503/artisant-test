import React from 'react';
import Cards from '../../features/cards/components/Cards/Cards';

import s from './App.module.scss';

const App = (): JSX.Element => {
  return (
    <div className={s.App}>
      <Cards />
    </div>
  );
}

export default App;
