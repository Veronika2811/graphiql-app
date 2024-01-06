import { fireEvent, render, waitFor } from '@testing-library/react';
import { ROOT } from 'shared/constants/elements';
import { SUCCESS } from 'shared/constants/errors';
import { vi } from 'vitest';

import { SignInForm } from 'components/SignInForm';

const mockOpenSnackbar = vi.fn();

const mocks = vi.hoisted(() => ({
  authService: {
    signIn: vi.fn(),
  },
  useSnackbar: () => ({
    openSnackbar: mockOpenSnackbar,
  }),
}));

vi.mock('api/apiAuthFirebase', () => ({
  __esModule: true,
  default: mocks.authService,
}));

vi.mock('components/SnackbarProvider', () => ({
  useSnackbar: mocks.useSnackbar,
}));

describe('SignInForm', () => {
  it('renders SignInForm component correctly', () => {
    const { getByText, getByRole } = render(<SignInForm />);

    const emailInput = getByText(ROOT.SIGN_IN_FORM.LABEL_LOGIN);
    const passwordInput = getByText(ROOT.SIGN_IN_FORM.LABEL_PASSWORD);
    const submitButton = getByRole('button', {
      name: ROOT.SIGN_IN_FORM.BUTTON,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('toggles password visibility correctly', () => {
    const { getByLabelText, getByTestId } = render(<SignInForm />);

    const passwordInput = getByLabelText(/Password/i, { selector: 'input' });
    const visibilityButton = getByTestId('VisibilityIcon').closest('button');

    if (visibilityButton) {
      expect(passwordInput.getAttribute('type')).toBe('password');

      fireEvent.click(visibilityButton);
      expect(passwordInput.getAttribute('type')).toBe('text');

      fireEvent.click(visibilityButton);
      expect(passwordInput.getAttribute('type')).toBe('password');
    } else {
      throw new Error('Could not find button element for visibility toggle');
    }
  });

  it('allows user to input data and submit form', async () => {
    const email = 'test@example.com';
    const password = '12345qQ!';

    // mocks.authService.signIn.mockImplementation(async () => {});
    // mocks.authService.signIn.mockImplementation( () =>
    //     Promise.resolve()
    // );
    // mocks.authService.signIn.mockImplementation(() => {
    //   throw new Error('Test error');
    // });

    const { getByLabelText, getByRole } = render(<SignInForm />);

    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, { selector: 'input' });
    const submitButton = getByRole('button', {
      name: ROOT.SIGN_IN_FORM.BUTTON,
    });

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mocks.authService.signIn).toHaveBeenCalled();
      expect(mockOpenSnackbar).toHaveBeenCalled();
      expect(mockOpenSnackbar).toHaveBeenCalledWith(SUCCESS.SIGN_IN, 'success');
    });
  });

  it('allows user to input data and submit form', async () => {
    const email = 'test@example.com';
    const password = '12345qQ!';

    mocks.authService.signIn.mockImplementation(() => {
      throw new Error('Test error');
    });

    const { getByLabelText, getByRole } = render(<SignInForm />);

    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, { selector: 'input' });
    const submitButton = getByRole('button', {
      name: ROOT.SIGN_IN_FORM.BUTTON,
    });

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mocks.authService.signIn).toHaveBeenCalled();
      expect(mockOpenSnackbar).toHaveBeenCalled();
      expect(mockOpenSnackbar).toHaveBeenCalledWith('Unknown error', 'error');
    });
  });

  it('displays error message for password field when validation fails', async () => {
    const { getByLabelText, getByText } = render(<SignInForm />);

    const passwordInput = getByLabelText(/Password/i, { selector: 'input' });
    const emaildInput = getByLabelText(/Email/i);

    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.blur(passwordInput);

    fireEvent.change(emaildInput, { target: { value: 'short' } });
    fireEvent.blur(emaildInput);

    await waitFor(() => {
      const errorMessagePassword = getByText(
        'Password should be of minimum 8 characters length'
      );
      expect(errorMessagePassword).toBeInTheDocument();
      const errorMessageEmail = getByText(
        'Enter a valid email (e.g., user@example.com)'
      );
      expect(errorMessageEmail).toBeInTheDocument();
    });
  });
});
