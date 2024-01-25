import './styles.scss';

import { Outlet } from 'react-router-dom';

import { Header } from '../header';

export function AuthenticatedLayout() {
  return (
    <div className="authenticated-container">
      <Header />
      <div className="authenticated-content">
        <Outlet />
      </div>
    </div>
  );
}
