import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('shows char card', () => {
  it('char details', async () => {
    render(
      <MemoryRouter initialEntries={['/list/2']}>
        <App />
      </MemoryRouter>
    );
    // screen.debug();

    // const welcome = screen.findByText(
    //   'Welcome To The Rick and Morty API. CLICK ME TO ENTER!!!'
    // );

    // userEvent.click(welcome);

    const test = await screen.findByText('Morty Smith');
    expect(test).toBeInTheDocument();

    screen.debug();
  });
});
