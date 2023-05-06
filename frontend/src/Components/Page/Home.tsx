import { useState } from 'react';
import Spinner from '../common/Spinner';
import query from '../../graphql/query';
import { useQuery } from 'urql';
import FactoryTable from '../FactoryTable';

/**
 * App Component
 * @returns 
 */
function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // execute query
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Account Abstruction Dapp</h1>
        {isLoading ?
          <Spinner/>
        : (
          <>
            <div className="mb-16">Deployed FactoryContract by FactoryManager</div>
            {data !== undefined && <FactoryTable data={data} />}
          </>
        )}
      </header>
    </div>
  );
}

export default Home;