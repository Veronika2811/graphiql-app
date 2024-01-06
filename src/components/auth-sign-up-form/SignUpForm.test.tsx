import { fireEvent, render, waitFor } from '@testing-library/react';
import { englishDictionary } from 'internationalization/locales/en';
import { vi } from 'vitest';

import { SignUpForm } from '.';

const mockOpenSnackbar = vi.fn();

const mocks = vi.hoisted(() => ({
  authService: {
    checkEmail: vi.fn(),
    registerUser: vi.fn(),
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

describe('SignUpForm', () => {
  it('renders SignUpForm component correctly', () => {
    const { getByText, getByRole } = render(<SignUpForm />);

    const emailInput = getByText(englishDictionary.auth_email);
    const passwordInput = getByText(englishDictionary.auth_password);
    const submitButton = getByRole('button', {
      name: englishDictionary.signUp,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls checkEmail with the entered email', async () => {
    const name = 'Test';
    const email = 'test@example.com';
    const password = '12345qQ!';
    const confirmPassword = password;

    mocks.authService.checkEmail.mockResolvedValue(true);

    const { getByLabelText, getByRole, getByText } = render(<SignUpForm />);

    const submitButton = getByRole('button', {
      name: englishDictionary.signUp,
    });

    const nameInput = getByLabelText(/Name/i);
    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, {
      selector: 'input[name="password"]',
    });
    const confirmPasswordInput = getByLabelText(/confirm Password/i, {
      selector: 'input[name="confirmPassword"]',
    });

    fireEvent.input(nameInput, { target: { value: name } });
    fireEvent.blur(nameInput);

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.blur(emailInput);

    fireEvent.input(passwordInput, { target: { value: password } });
    fireEvent.blur(passwordInput);

    fireEvent.input(confirmPasswordInput, {
      target: { value: confirmPassword },
    });
    fireEvent.blur(confirmPasswordInput);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        getByText(englishDictionary.auth_email_already_taken)
      ).toBeInTheDocument();
    });
  });

  it('calls registerUser', async () => {
    const name = 'Test';
    const email = 'test@example.com';
    const password = '12345qQ!';
    const confirmPassword = password;

    mocks.authService.checkEmail.mockResolvedValue(false);

    const { getByLabelText, getByRole } = render(<SignUpForm />);

    const submitButton = getByRole('button', {
      name: englishDictionary.signUp,
    });

    const nameInput = getByLabelText(/Name/i);
    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, {
      selector: 'input[name="password"]',
    });
    const confirmPasswordInput = getByLabelText(/confirm Password/i, {
      selector: 'input[name="confirmPassword"]',
    });

    fireEvent.input(nameInput, { target: { value: name } });
    fireEvent.blur(nameInput);

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.blur(emailInput);

    fireEvent.input(passwordInput, { target: { value: password } });
    fireEvent.blur(passwordInput);

    fireEvent.input(confirmPasswordInput, {
      target: { value: confirmPassword },
    });
    fireEvent.blur(confirmPasswordInput);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mocks.authService.registerUser).toHaveBeenCalled();
    });
  });

  it('catch error for registerUser', async () => {
    const name = 'Test';
    const email = 'test@example.com';
    const password = '12345qQ!';
    const confirmPassword = password;

    mocks.authService.checkEmail.mockResolvedValue(false);
    mocks.authService.registerUser.mockImplementation(() => {
      throw new Error('Test error');
    });

    const { getByLabelText, getByRole } = render(<SignUpForm />);

    const submitButton = getByRole('button', {
      name: englishDictionary.signUp,
    });

    const nameInput = getByLabelText(/Name/i);
    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, {
      selector: 'input[name="password"]',
    });
    const confirmPasswordInput = getByLabelText(/confirm Password/i, {
      selector: 'input[name="confirmPassword"]',
    });

    fireEvent.input(nameInput, { target: { value: name } });
    fireEvent.blur(nameInput);

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.blur(emailInput);

    fireEvent.input(passwordInput, { target: { value: password } });
    fireEvent.blur(passwordInput);

    fireEvent.input(confirmPasswordInput, {
      target: { value: confirmPassword },
    });
    fireEvent.blur(confirmPasswordInput);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mocks.authService.registerUser).toHaveBeenCalled();
      expect(mockOpenSnackbar).toHaveBeenCalled();
      expect(mockOpenSnackbar).toHaveBeenCalledWith('Unknown error', 'error');
    });
  });

  it('displays error message for field when validation fails', async () => {
    const name = '';
    const email = 'testexample.com';
    const password = '12345qQ';
    const confirmPassword = 's';

    const { getByLabelText, getByText } = render(<SignUpForm />);

    const nameInput = getByLabelText(/Name/i);
    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i, {
      selector: 'input[name="password"]',
    });
    const confirmPasswordInput = getByLabelText(/confirm Password/i, {
      selector: 'input[name="confirmPassword"]',
    });

    fireEvent.input(nameInput, { target: { value: name } });
    fireEvent.blur(nameInput);

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.blur(emailInput);

    fireEvent.input(passwordInput, { target: { value: password } });
    fireEvent.blur(passwordInput);

    fireEvent.input(confirmPasswordInput, {
      target: { value: confirmPassword },
    });
    fireEvent.blur(confirmPasswordInput);

    await waitFor(() => {
      expect(
        getByText(englishDictionary.yup_required_field)
      ).toBeInTheDocument();
      expect(getByText(englishDictionary.yup_valid_email)).toBeInTheDocument();
      expect(
        getByText(englishDictionary.yup_special_character)
      ).toBeInTheDocument();
      expect(
        getByText(englishDictionary.yup_password_mismatch)
      ).toBeInTheDocument();
    });
  });

  it('changes input type based on showPassword state', () => {
    const { getByLabelText, getAllByLabelText } = render(<SignUpForm />);

    const passwordInput = getByLabelText(/Password/i, {
      selector: 'input[name="password"]',
    });
    const confirmPasswordInput = getByLabelText(/confirm Password/i, {
      selector: 'input[name="confirmPassword"]',
    });
    const toggleButton = getAllByLabelText('Visibility Password')[0];

    expect(passwordInput.getAttribute('type')).toBe('password');
    expect(confirmPasswordInput.getAttribute('type')).toBe('password');

    fireEvent.click(toggleButton);

    expect(passwordInput.getAttribute('type')).toBe('text');
    expect(confirmPasswordInput.getAttribute('type')).toBe('text');
  });
});
