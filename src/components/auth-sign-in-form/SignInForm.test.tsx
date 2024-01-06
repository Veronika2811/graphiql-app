import { fireEvent, render, waitFor } from '@testing-library/react';
import { englishDictionary } from 'internationalization/locales/en';
import { vi } from 'vitest';

import { SignInForm } from '.';

const mockOpenSnackbar = vi.fn();

const mocks = vi.hoisted(() => ({
  authService: {
    signIn: vi.fn(),
  },
  useSnackbar: () => ({
    openSnackbar: mockOpenSnackbar,
  }),
  useLocale: vi.fn(),
}));

vi.mock('api/apiAuthFirebase', () => ({
  __esModule: true,
  default: mocks.authService,
}));

vi.mock('context/snackbar-provider', () => ({
  useSnackbar: mocks.useSnackbar,
}));

vi.mock('internationalization/useLocale', () => ({
  useLocale: mocks.useLocale,
}));

mocks.useLocale.mockReturnValue({
  translation: englishDictionary,
});

describe('SignInForm', () => {
  it('renders SignInForm component correctly', () => {
    const { getByText, getByRole } = render(<SignInForm />);

    const emailInput = getByText(englishDictionary.auth_email);
    const passwordInput = getByText(englishDictionary.auth_password);
    const submitButton = getByRole('button', {
      name: englishDictionary.signIn,
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

    const { getByLabelText, getByRole } = render(<SignInForm />);

    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, { selector: 'input' });
    const submitButton = getByRole('button', {
      name: englishDictionary.signIn,
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
      expect(mockOpenSnackbar).toHaveBeenCalledWith(
        englishDictionary.auth_success_sign_in,
        'success'
      );
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
      name: englishDictionary.signIn,
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
        englishDictionary.yup_uppercase_letter
      );
      expect(errorMessagePassword).toBeInTheDocument();
      const errorMessageEmail = getByText(englishDictionary.yup_valid_email);
      expect(errorMessageEmail).toBeInTheDocument();
    });
  });
});
