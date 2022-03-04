import React from 'react';
import { render } from '@testing-library/react';

import Transacao from './Transacao';

describe('TransacaoComponent ', () => {
   it('should be display snapshot\'s component', () => {
      const { container } = render(<Transacao 
         data="03/03/2022"
         tipo="saque"
         valor="400"
      />)

      expect(container.firstChild).toMatchSnapshot()
   });
})