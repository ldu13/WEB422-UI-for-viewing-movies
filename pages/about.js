import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";
import MainNav from '../components/MainNav';

// "getStaticProps" to fetch a specific movie from the API
export async function getStaticProps() {
  // Call an external API endpoint to get movies
  const res = await fetch('https://lively-pea-coat-frog.cyclic.app/api/movies/573a1399f29313caabcee607');
  const data = await res.json();

  return { props: { movie: data } };
}


export default function About(props) {
  return (
    <>
      <MainNav />
      <br /><br />
      
      <PageHeader text="About the Developer: Lei Du" />

      <Card>        
        <Card.Body>         
            Hi my name is Lei Du.<br /><br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
            It is difficult to choose a favourite, but <Link href="/movies/Forrest Gump" passHref><a>Forrest Gump</a></Link> (released in 1994) is one that I always enjoy watching. 
            <br /><br />
        </Card.Body>       
        <MovieDetails movie={props.movie} />
      </Card>   

    </>
  );
}