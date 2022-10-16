

import useSWR from 'swr';
import { useState, useEffect} from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';
import MainNav from '../components/MainNav';

export default function Home(props) {
  
  // add state values
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // use SWR to make a request for the data
  const { data, error } = useSWR(`https://lively-pea-coat-frog.cyclic.app/api/movies?page=${page}&perPage=10`);

  // "useEffect" hook
  useEffect(() => {
    if (data) {
    setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  }

  function next() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <MainNav />
      <br /><br />

      <PageHeader text="Film Collection : Sorted by Date" />
      
      <Accordion defaultActiveKey="0">
        {pageData.map((item, index) => (
            <Accordion.Item eventKey={item._id} key={index}>
              <Accordion.Header>
                <strong>{item.title}&nbsp;</strong> ({item.year}: Directed By {item.directors.join(', ')})
              </Accordion.Header>
              <Accordion.Body>
                <MovieDetails movie={item} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>

      <br />
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>

    </>
  );
}
