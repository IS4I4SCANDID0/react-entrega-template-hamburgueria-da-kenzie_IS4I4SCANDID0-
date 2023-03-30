import logo from './../../assets/logo-kenzie-burger.svg';
import { SearchComponent } from './searchComponent';

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kenzie Burger" />
      <SearchComponent />
    </header>
  );
}
