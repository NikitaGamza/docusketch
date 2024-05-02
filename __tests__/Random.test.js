import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Random from '../src/app/components/Random/Random';

describe('Random', () => {
  it('renders a heading', () => {
    render(<Random />);

    const heading = screen.getByRole('button');

    expect(heading).toBeInTheDocument();
  });
});
