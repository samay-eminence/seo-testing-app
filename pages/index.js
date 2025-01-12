import Link from "next/link";

const Home = () => (
  <div className="home-container">
    <h1>Game Showcase</h1>
    <ul>
      <li>
        <Link href="/diablo-iv-2023">Diablo IV (2023)</Link>
      </li>
    </ul>
  </div>
);

export default Home;
