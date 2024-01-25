import './styles.scss';

import { SignOut } from 'phosphor-react';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2>Dragon App. </h2>

        <div>
          <SignOut size={32} weight="bold" />
        </div>
      </div>
    </header>
  );
}
