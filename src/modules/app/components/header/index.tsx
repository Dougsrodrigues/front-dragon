import './styles.scss';

import { SignOut } from 'phosphor-react';

import { useSignOut } from '../../../authentication/hooks/useSignOut';

export function Header() {
  const { handleSignOut } = useSignOut();
  return (
    <header className="header-container">
      <div className="header-content">
        <h2>Dragon App. </h2>

        <div>
          <SignOut size={32} weight="bold" onClick={handleSignOut} />
        </div>
      </div>
    </header>
  );
}
