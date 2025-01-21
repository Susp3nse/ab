import { useQuery } from "@tanstack/react-query";

export const useUserData = (userName: string) =>
  useQuery({ queryKey: ["todos"], queryFn: () => fetchUserData(userName) });

const fetchUserData = async (userName: string) => {
  const res = await fetch(
    `https://sync.runescape.wiki/runelite/player/${userName}/STANDARD`
  );
  return await res.json();
};
