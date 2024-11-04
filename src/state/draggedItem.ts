import { proxy } from 'valtio';
import { Bookmark } from '../types/bookmark';

interface DraggedItem {
  draggedBookmark: Bookmark | null;
  draggedFromSection: string | null;
}

export const draggedItemState = proxy<DraggedItem>({
  draggedBookmark: null,
  draggedFromSection: null,
}); 
