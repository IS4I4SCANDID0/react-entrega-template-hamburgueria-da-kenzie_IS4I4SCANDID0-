import { StyledHeader } from '../../styles/header';
import logo from './../../assets/logo-kenzie-burger.svg';
import { SearchComponent } from './searchComponent';

export function Header({ setSearch }) {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo Kenzie Burger" />
      <SearchComponent setSearch={setSearch} />
    </StyledHeader>
  );
}
