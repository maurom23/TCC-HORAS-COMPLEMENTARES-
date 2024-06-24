import "./SearchResults.styles.css";

const SearchResults = () => {
    return (
        <div className="search-results-page">
            <span className="bordered-container">
                <p>ENTREGA DE HORAS COMPLEMENTARES</p>
            </span>
            <p>
                para entregar as horas basta arrastar ou clicar para enviar a
                horas complementares.
            </p>
            <div className="file-attach-container">
                <label htmlFor="file-attach">ANEXAR ARQUIVO</label>
                <input id="file-attach" type="file" />
            </div>
        </div>
    );
};

export default SearchResults;
