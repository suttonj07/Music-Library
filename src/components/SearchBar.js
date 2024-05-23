     
        import { useContext } from 'react';
        import { SearchContext } from './SearchContext';
        
        function SearchBar(props) {
            let {term, handleSearch} = useContext(SearchContext);

            return (
                <form>
                    <input ref={term} type="text" placeholder="Enter a search term here" />
                    <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button> 
                </form>
            )
        }

        export default SearchBar;
    