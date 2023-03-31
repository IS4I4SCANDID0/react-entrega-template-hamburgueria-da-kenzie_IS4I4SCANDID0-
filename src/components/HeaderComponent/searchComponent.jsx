import { useState } from 'react';

export function SearchComponent({ setSearch }) {
  const [searchInput, setSearchInput] = useState('');

  function submitSearch(event) {
    event.preventDefault();
    setSearch(searchInput);
    setSearchInput('');
  }

  return (
    <form onSubmit={submitSearch}>
      <input type="search" placeholder="Digitar pesquisa" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
      <button type="submit">Pesquisar</button>
    </form>
  );
}
