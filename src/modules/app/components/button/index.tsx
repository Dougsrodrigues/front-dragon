import './styles.scss';

import { BUTTON_VARIANTS } from '../../utils/constants';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: BUTTON_VARIANTS;
}

export function Button({
  children,
  isLoading = false,
  variant = BUTTON_VARIANTS.Primary,
  ...rest
}: ButtonProps) {
  return (
    <button className={`button-container variant-${variant}`} {...rest}>
      {isLoading ? (
        <span className={`loader-button variant-loader-${variant}`} />
      ) : (
        children
      )}
    </button>
  );
}
