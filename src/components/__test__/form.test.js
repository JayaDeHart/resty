import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import App from '../../app';
import Form from '../form';
import History from '../form';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    let response = {
      results: [{ name: 'test 1' }, { name: 'test 2' }],
    };

    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches pokemon', async () => {
  render(<App />);

  userEvent.type(
    screen.getByTestId('url-input'),
    'https://pokeapi.co/api/v2/pokemon'
  );

  userEvent.click(screen.getByTestId('submit-button'));

  const historyItem = await waitFor(() =>
    screen.getByTestId('history-element')
  );
  expect(historyItem.id).toBe('0');
});
