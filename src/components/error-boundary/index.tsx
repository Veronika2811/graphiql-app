import React, { ReactNode, useEffect, useState } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

export const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    const logError = (error: Error, errorInfo: React.ErrorInfo) => {
      console.error('Uncaught error:', error, errorInfo);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason instanceof Error) {
        logError(event.reason, {
          componentStack: 'Unhandled Promise Rejection',
        });
      } else {
        console.error(
          'Unhandled Promise Rejection (non-Error object):',
          event.reason
        );
      }
    });

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
