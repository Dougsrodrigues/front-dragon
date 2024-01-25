import './styles.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <button className="button-container" {...rest}>
      {isLoading ? <span className="loader-button" /> : children}
    </button>
  );
}
