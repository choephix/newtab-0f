import { Bookmark } from '../../types/bookmark';
import { BookmarkSection } from './BookmarkSection';
import { DraggableBookmark } from '../items/DraggableBookmark';

interface Props {
  bookmarks: Bookmark[];
  onMove: (bookmark: Bookmark, fromSection: string, toSection: string) => void;
  section: string;
}

export function TabloidBookmarks({ bookmarks, onMove, section }: Props) {
  return (
    <BookmarkSection section={section} onMove={onMove} className='p-4 mt-2 py-8'>
      <div className='grid grid-cols-2 gap-4 mx-auto'>
        {bookmarks.map((bookmark, index) => (
          <a
            key={bookmark.label}
            href={bookmark.href}
            className='block'
            onClick={e => e.preventDefault()}
          >
            <DraggableBookmark
              bookmark={bookmark}
              section={section}
              onMove={onMove}
              index={index}
              className='flex flex-col items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'
              iconContainerClassName='w-6 h-6 flex items-center justify-center rounded-lg mb-2'
              iconClassName='w-6 h-6 text-gray-700'
              labelClassName='text-lg font-medium text-gray-700 mt-4'
            />
          </a>
        ))}
      </div>
    </BookmarkSection>
  );
}
