export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((note) => {
    return {
      params: { slug: note.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${context.params.slug}`
    );
    const data = await res.json();
    return {
        props: { list: data },
    };
  }


const Details = ({ list }) => {
  return (
    <div>
        <h1>{list.name}</h1>
        <p>{list.email}</p>
        <p>{list.website}</p>
        <p>{list.address.city}</p>
    </div>
  );
};

export default Details;
