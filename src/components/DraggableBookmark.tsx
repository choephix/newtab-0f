import React, { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Bookmark } from '../types/bookmark';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface Props {
  bookmark: Bookmark;
  section: string;
  onMove: (bookmark: Bookmark, fromSection: string, toSection: string) => void;
  className?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  index: number;
}

export function DraggableBookmark({ 
  bookmark, 
  section,
  onMove,
  className = "",
  iconContainerClassName = "",
  iconClassName = "",
  labelClassName = "",
  index
}: Props) {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'bookmark',
    item: { bookmark, fromSection: section, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    preview(getEmptyImage());
  }, [preview]);

  const iconUrl = '/assets/planet.svg';

  return (
    <div
      ref={drag}
      className={`
        ${className}
        cursor-move
        transition-all duration-200
        ${isDragging ? 'opacity-30' : 'opacity-100'}
      `}
      data-testid={`bookmark-${bookmark.label}`}
    >
      <div className={iconContainerClassName}>
        <img src={iconUrl} alt="Icon" className={iconClassName} />
      </div>
      <span className={labelClassName}>{bookmark.label}</span>
    </div>
  );
}
