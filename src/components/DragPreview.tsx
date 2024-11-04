import React from 'react';
import { useDragLayer } from 'react-dnd';
import * as LucideIcons from 'lucide-react';

export function DragPreview() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset || !item) {
    return null;
  }

  const IconComponent = LucideIcons[item.bookmark.icon as keyof typeof LucideIcons];

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        left: currentOffset.x,
        top: currentOffset.y,
        transform: 'translate(-50%, -50%)'
      }}
      className="bg-white shadow-2xl rounded-xl p-4 scale-105"
    >
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3">
          {IconComponent && <IconComponent className="w-5 h-5 text-gray-700" />}
        </div>
        <span className="text-gray-700">{item.bookmark.label}</span>
      </div>
    </div>
  );
}