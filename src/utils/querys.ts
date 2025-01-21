import { useQuery } from '@tanstack/react-query';
import { WikiUserData } from './quests';

export const useUserData = (userName: string) =>
  useQuery({ queryKey: ['todos'], queryFn: () => fetchUserData(userName) });

// The hook for fetching user data using react-query
const fetchUserData = async (userName: string): Promise<WikiUserData> => {
  const res = await fetch(`https://sync.runescape.wiki/runelite/player/${userName}/STANDARD`);
  if (!res.ok) {
    throw new Error('User data not found');
  }
  return await res.json();
};
