import logo from './../../assets/Burguer Kenzie.jpg';
import { SearchComponent } from './searchComponent';

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kenzie Burger" />
      <SearchComponent />
    </header>
  );
}
