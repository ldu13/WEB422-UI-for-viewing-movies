import {useRouter} from 'next/router';
import useSWR from 'swr';
import MovieDetails from '../../components/MovieDetails';
import Error from 'next/error';
import PageHeader from '../../components/PageHeader';
import MainNav from '../../components/MainNav';

export default function MovieTitle() {
  const router = useRouter();
  const { title } = router.query;

  const { data, error } = useSWR(`https://lively-pea-coat-frog.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);
  
  if(data == null || data == undefined) {
    return null;
  } else {
    if(data.length <= 0) {
      return (<Error statusCode={404} />);
    } else {
      return (
        <>
          <MainNav />
          <br /><br />
          {data.map(item => (
            <div key={item._id}>
              <PageHeader text={item.title} />
              <MovieDetails movie={item} />
            </div>
          ))}
        </>
      )
    }
  }
}