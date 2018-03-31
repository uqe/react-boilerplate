import React from 'react';
import { hot } from 'react-hot-loader';

import SayHello from './SayHello';

const App = () => <SayHello name="your name" />;

export default hot(module)(App);
