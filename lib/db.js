export const getGameData = (slug) => {
  const games = [
    {
      slug: "diablo-iv-2023",
      title: "Diablo IV (2023)",
      description:
        "Endless demons to slaughter. Deep customization through Talents, Skill Points, Runes, and Legendary loot. Randomized dungeons contained in a dynamic open world.",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co69sm.jpg",
      siteName: "Game Showcase",
    },
  ];
  return games.find((game) => game.slug === slug);
};
