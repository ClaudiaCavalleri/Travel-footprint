import { useContext, useRef } from 'react';
import { AppContext } from './context/AppContext';
import "./App.css";

import { useUpdateInputs } from './hooks/useUpdateInputs';
import { useFetchAirportInfo } from "./hooks/useFetchAirportInfo";
import { useFetchFootprint } from './hooks/useFetchFootprint';
import { useSelectAirport } from './hooks/useSelectAirport';
import { useSearchFlight } from './hooks/useSearchFlight';
import { useSetDropdown } from './hooks/useSetDropdown';
import { useNewSearch } from './hooks/useNewSearch';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import Results from './components/Results/Results';
import Footer from './components/Footer/Footer';

export default function App() {
  const { state } = useContext(AppContext);
  const { showResults, isFrom } = state;
  const resultsBox = useRef(null);
  const searchBox = useRef(null);

  const { updateInputs } = useUpdateInputs();
  const { airportInfo, airportInfoLoaded } = useFetchAirportInfo(isFrom);
  const { selectAirport } = useSelectAirport();

  const { searchFlight } = useSearchFlight(resultsBox);
  const { styleDropdown } = useSetDropdown(isFrom);
  const { footprint, totalFootprint } = useFetchFootprint();
  const { newSearch } = useNewSearch(searchBox);

  return (
    <main className="App">
      <Navbar />
      <Hero />
      <section className='searchBox' ref={searchBox}>
        <SearchForm
          updateInputs={updateInputs}
          airportInfo={airportInfo}
          airportInfoLoaded={airportInfoLoaded}
          selectAirport={selectAirport}
          styleDropdown={styleDropdown}
          searchFlight={searchFlight}
        />
      </section>
      
      <section className="results" ref={resultsBox}>
        {showResults && (
          <Results  
            footprint={footprint}
            totalFootprint={totalFootprint}
            newSearch={newSearch}
          />
        )}
      </section>
      <Footer />
    </main> 
  );
}

