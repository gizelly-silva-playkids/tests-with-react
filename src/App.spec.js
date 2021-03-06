import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App';
import api from './api';

jest.mock('./api');

const transactions = [
   {
      "valor": "10",
      "transacao": "saque",
      "data": "10/08/2020",
      "id": 1
   },
   {
      "transacao": "deposito",
      "valor": "20",
      "data": "26/09/2020",
      "id": 2
   }
];

describe('AppComponent - Displaying info from bank', () => {
   
   it('should be display bank name', () => {
      render(<App />);

      expect(screen.getByText('ByteBank')).toBeInTheDocument()
   })

   it('should be display balance', () => {
      render(<App />);

      expect(screen.getByText('Saldo:')).toBeInTheDocument()
   })

   it('should be display the \'realize operation\' button', () => {
      render(<App />);

      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
   })

});

describe('AppComponent - Carrying out bank transactions', () => {

   it('should be increase balance when occur a deposit', () => {
      const values = {
         transacao: 'deposito',
         valor: 300
      }
      const newBalance = calcularNovoSaldo(values, 1000)
      expect(newBalance).toBe(1300);
   });

   it('should be decrease balance when occur a withdrawal', () => {
      const values = {
         transacao: 'saque',
         valor: 300
      }
      const newBalance = calcularNovoSaldo(values, 1000)
      expect(newBalance).toBe(700);
   });

   it('should be realized transaction when occur a withdrawal', () => {
      render(<App />);

      const balance = screen.getByText('R$ 1000');
      const transaction = screen.getByLabelText('Saque')
      const value = screen.getByTestId('valor')
      const submit = screen.getByText('Realizar operação')

      expect(balance.textContent).toBe('R$ 1000')

      fireEvent.click(transaction, { target: { value: 'saque' }});
      fireEvent.change(value, { target: { value: 200 } });
      fireEvent.click(submit);

      expect(balance.textContent).toBe('R$ 800')
   });

});

describe('AppComponent - integration API', () => {
   it('should be display transaction list from mock', async () => {
      api.listaTransacoes.mockResolvedValue(transactions);

      render(<App />);

      expect(await screen.findByText('saque')).toBeInTheDocument();

      expect(screen.getByTestId('transacoes').children.length).toBe(2);
   });
});