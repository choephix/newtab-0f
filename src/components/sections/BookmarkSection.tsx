import React from 'react';
import { useDrop } from 'react-dnd';
import { Bookmark } from '../../types/bookmark';

interface Props {
  children: React.ReactNode;
  section: string;
  onMove: (bookmark: Bookmark, fromSection: string, toSection: string) => void;
  className?: string;
}

export function BookmarkSection({ children, section, onMove, className = "" }: Props) {
  const [{ isOver, canDrop, isDragging }, drop] = useDrop(() => ({
    accept: 'bookmark',
    drop: (item: { bookmark: Bookmark; fromSection: string }) => {
      if (item.fromSection !== section) {
        onMove(item.bookmark, item.fromSection, section);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop() && monitor.getItem()?.fromSection !== section,
      isDragging: monitor.getItem() !== null,
    }),
  }));

  return (
    <div
      ref={drop}
      className={`
        ${className}
        rounded-xl
        transition-all duration-200
        ${isOver ? 'ring-4 ring-blue-400 ring-opacity-50 bg-blue-50' : ''}
        ${isDragging && !isOver ? 'ring-1 ring-gray-300' : ''}
      `}
    >
      {children}
    </div>
  );
}
