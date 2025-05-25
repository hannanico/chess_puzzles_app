import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase-client";
import type { PuzzleType } from "../types/PuzzleTypes";

export default function useSupabase(){
  const [puzzles, setPuzzles] = useState<PuzzleType[]>();

  async function fetchPuzzles(){
    const puzzleRes = await supabase
    .rpc('get_random_puzzles')
    .limit(25)

    const puzzlesData = puzzleRes.data as PuzzleType[];
    if (puzzlesData) {
      setPuzzles(puzzlesData);
    } else {
      console.error('Error fetching puzzles:', puzzleRes.error);
    }
    setPuzzles(puzzlesData);
  }
  useEffect(() => {
    fetchPuzzles();
  }, []); 
  return puzzles
}