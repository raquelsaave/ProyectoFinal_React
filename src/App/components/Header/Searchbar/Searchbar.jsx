import React from 'react';

// Boostrap
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Estilos
import './Searchbar.css';

const SearchBar = () => {
  return (
    <>
    <Form inline>
    <div className="Icon">
    <FontAwesomeIcon icon={faSearch} /> 
    </div>
    <FormControl type="text" placeholder="Busca lo que quieras" className=" mr-sm-2" />
    {/* <input type="text" className="input" placeholder="Search..." /> */}
    <Button type="submit">¡Buscar!</Button>
    </Form>
    </>
  );
}

export default SearchBar;