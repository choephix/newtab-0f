import { Bookmark } from '../types/bookmark';
import { BookmarkSection } from './BookmarkSection';
import { DraggableBookmark } from './DraggableBookmark';

interface Props {
  bookmarks: Bookmark[];
  onMove: (bookmark: Bookmark, fromSection: string, toSection: string) => void;
  section: string;
}

export function PriorityBookmarks({ bookmarks, onMove, section }: Props) {
  return (
    <BookmarkSection section={section} onMove={onMove} className='p-4 py-8'>
      <div className='flex flex-wrap justify-center gap-4'>
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
              className='flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-colors'
              iconContainerClassName='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'
              iconClassName='w-6 h-6 text-gray-700'
              labelClassName='mt-2 text-sm text-gray-600'
            />
          </a>
        ))}
      </div>
    </BookmarkSection>
  );
}
