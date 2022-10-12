import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/List.module.scss';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { list: data },
  };
};

const List = ({ list }) => {
  return (
    <>
      <Head>
        <title>Next List | List</title>
        <meta name='keywords' content='next list' />
      </Head>
      <div>
        {list.map((note) => (
          <Link href={`/list/${note.id}`} key={note.id}>
            <a className={styles.single}>
              <h3>{note.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default List;
