import React from 'react';
import { DraggableBookmark } from './DraggableBookmark';
import { BookmarkSection } from './BookmarkSection';
import { Bookmark } from '../types/bookmark';

interface Props {
  bookmarks: Bookmark[];
  onMove: (bookmark: Bookmark, fromSection: string, toSection: string) => void;
  section: string;
}

export function TabloidBookmarks({ bookmarks, onMove, section }: Props) {
  return (
    <BookmarkSection section={section} onMove={onMove} className="p-4 mt-8">
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {bookmarks.map((bookmark, index) => (
          <a
            key={bookmark.label}
            href={bookmark.href}
            className="block"
            onClick={(e) => e.preventDefault()}
          >
            <DraggableBookmark
              bookmark={bookmark}
              section={section}
              onMove={onMove}
              index={index}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              iconContainerClassName="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg mr-4"
              iconClassName="w-6 h-6 text-gray-700"
              labelClassName="text-lg font-medium text-gray-700"
            />
          </a>
        ))}
      </div>
    </BookmarkSection>
  );
}