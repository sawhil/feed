import { atom, useAtomValue } from 'jotai';

export const postsAtom = atom({});
export const pinnedPostIdAtom = atom(null);
export const newPostsAvailableAtom = atom(false);
export const newPosts = atom({});
export const pinnedPostPositionAtom = atom({ x: 20, y: 20 });

export const usePinnedPostData = () => {
  const posts = useAtomValue(postsAtom);
  const pinnedPostId = useAtomValue(pinnedPostIdAtom);
  return posts[pinnedPostId];
};