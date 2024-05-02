import '@testing-library/jest-dom';
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Random from '../src/app/components/Random/Random';

describe('Random', () => {
  it('renders a btn', () => {
    render(<Random />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
test('Click random icon btn', () => {
  render(<Random />);
  const btn = screen.getByText('Get random icon');
  const iconBox = screen.getByTestId('iconBox');
  expect(iconBox.classList.contains('fa-0'));
  userEvent.click(btn);
  act(() => jest.advanceTimersByTime(3500));
  expect(iconBox.classList.contains('fa-0'));
});
