import { supabase } from "./supabase";

export async function createSwipe(
  userId: string,
  likedUserId: string,
  liked: boolean
) {
  const { data, error } = await supabase
    .from("swipes")
    .insert([
      {
        user_id: userId,
        liked_user_id: likedUserId,
        liked,
      },
    ]);

  return { data, error };
}