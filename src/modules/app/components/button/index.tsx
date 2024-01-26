import './styles.scss';

import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../utils/constants';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZES;
}

export function Button({
  children,
  isLoading = false,
  variant = BUTTON_VARIANTS.Primary,
  size = BUTTON_SIZES.MD,
  ...rest
}: ButtonProps) {
  return (
    <button className={`button-container variant-${variant}-${size}`} {...rest}>
      {isLoading ? (
        <span className={`loader-button variant-loader-${variant}`} />
      ) : (
        children
      )}
    </button>
  );
}
