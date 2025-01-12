import { getGameData } from "../lib/db";
import Layout from "../components/Layout";

const GamePage = ({ game }) => {
  if (!game) {
    return <p>Game not found</p>;
  }

  const meta = {
    title: game.title,
    description: game.description,
    image: game.image,
    siteName: game.siteName,
  };

  return (
    <Layout meta={meta}>
      <div className="content-container">
        <h1 className="content-title">{game.title}</h1>
        <p className="content-description">{game.description}</p>
        <img
          src={game.image}
          alt={`${game.title} Cover Art`}
          className="content-image"
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const game = await getGameData(slug);
  return { props: { game: game || null } };
}

export default GamePage;
