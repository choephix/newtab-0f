import React from 'react';
import { DraggableBookmark } from './DraggableBookmark';
import { BookmarkSection } from './BookmarkSection';
import { Bookmark } from '../types/bookmark';

interface Props {
  bookmarks: Bookmark[];
  onMove: (bookmark: Bookmark, fromSection: string, toSection: string) => void;
  section: string;
}

export function BelowFoldBookmarks({ bookmarks, onMove, section }: Props) {
  return (
    <BookmarkSection section={section} onMove={onMove} className='p-4 mt-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
              className='flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors'
              iconContainerClassName='w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3'
              iconClassName='w-5 h-5 text-gray-700'
              labelClassName='text-gray-700'
            />
          </a>
        ))}
      </div>
    </BookmarkSection>
  );
}
