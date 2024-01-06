import { useLocale } from 'internationalization/useLocale';

export const useGetDicErrorApi = () => {
  const { translation } = useLocale();

  return {
    'wrong-password': translation.dic_error_api_wrong_password,
    'invalid-email': translation.dic_error_api_invalid_email,
    'user-disabled': translation.dic_error_api_user_disabled,
    'user-not-found': translation.dic_error_api_user_not_found,
    'email-already-in-use': translation.dic_error_api_email_already_in_use,
    'operation-not-allowed': translation.dic_error_api_operation_not_allowed,
    'weak-password': translation.dic_error_api_weak_password,
    default: translation.dic_error_api_default,
  };
};
