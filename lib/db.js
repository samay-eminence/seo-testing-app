export const getGameData = async (slug) => {
  const apiUrl = `https://api.trugamer.com/api/games?filters[id][$eq]=${slug}&fields[0]=title&fields[1]=description&populate[coverImage][fields][0]=url`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch game data: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return null;
    }

    const game = data.data[0];
    const { title, description, coverImage } = game.attributes;

    return {
      slug,
      title,
      description,
      image: coverImage?.data?.attributes?.url || "",
      siteName: "Game Showcase",
    };
  } catch (error) {
    console.error("Error fetching game data:", error);
    return null;
  }
};
