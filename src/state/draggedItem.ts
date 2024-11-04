import { proxy } from 'valtio';
import { Bookmark } from '../types/bookmark';

interface DraggedItem {
  bookmark: Bookmark | null;
  fromSection: string | null;
}

export const draggedItemState = proxy<DraggedItem>({
  bookmark: null,
  fromSection: null,
}); 
