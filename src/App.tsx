import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSnapshot } from 'valtio';
import { BelowFoldBookmarks } from './components/BelowFoldBookmarks';
import { DragPreview } from './components/DragPreview';
import { PriorityBookmarks } from './components/PriorityBookmarks';
import { SearchBar } from './components/SearchBar';
import { TabloidBookmarks } from './components/TabloidBookmarks';
import {
  belowFoldBookmarks as initialBelowFold,
  priorityBookmarks as initialPriority,
  tabloidBookmarks as initialTabloid,
} from './data/sampleBookmarks';
import { draggedItemState } from './state/draggedItem';
import { Bookmark } from './types/bookmark';

function App() {
  const { draggedBookmark: bookmark } = useSnapshot(draggedItemState);

  const [bookmarks, setBookmarks] = useState({
    priority: initialPriority,
    tabloid: initialTabloid,
    belowFold: initialBelowFold,
  });

  const moveBookmark = (bookmark: Bookmark, fromSection: string, toSection: string) => {
    setBookmarks(prev => {
      const newBookmarks = { ...prev };
      newBookmarks[fromSection as keyof typeof bookmarks] = prev[
        fromSection as keyof typeof bookmarks
      ].filter(b => b.href !== bookmark.href);
      newBookmarks[toSection as keyof typeof bookmarks] = [
        ...prev[toSection as keyof typeof bookmarks],
        bookmark,
      ];
      return newBookmarks;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='min-h-screen bg-[#f8f9fa] py-8 px-4'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-center mb-8'>
            <img
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              alt='Google'
              className='h-8 object-contain'
            />
          </div>

          <SearchBar />

          <div className='mt-8'>
            <PriorityBookmarks
              bookmarks={bookmarks.priority}
              onMove={moveBookmark}
              section='priority'
            />
          </div>

          <hr
            className='my-2 border-gray-300'
            style={{ visibility: bookmark ? 'hidden' : 'visible' }}
          />

          <TabloidBookmarks bookmarks={bookmarks.tabloid} onMove={moveBookmark} section='tabloid' />

          <hr
            className='my-2 border-gray-300'
            style={{ visibility: bookmark ? 'hidden' : 'visible' }}
          />

          <BelowFoldBookmarks
            bookmarks={bookmarks.belowFold}
            onMove={moveBookmark}
            section='belowFold'
          />
        </div>
      </div>
      <DragPreview />
    </DndProvider>
  );
}

export default App;
