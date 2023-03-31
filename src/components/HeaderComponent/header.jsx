import logo from './../../assets/logo-kenzie-burger.svg';
import { SearchComponent } from './searchComponent';

export function Header({ setSearch }) {
  return (
    <header>
      <img src={logo} alt="Logo Kenzie Burger" />
      <SearchComponent setSearch={setSearch} />
    </header>
  );
}
