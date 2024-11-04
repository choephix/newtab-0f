import { useDragLayer } from 'react-dnd';

export function DragPreview() {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset || !item) {
    return null;
  }

  const iconUrl = '/assets/planet.svg';

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        left: 0,
        top: 0,
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
      }}
      className='bg-white shadow-2xl rounded-xl p-4 scale-105'
    >
      <div className='flex items-center'>
        <div className='w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3'>
          <img src={iconUrl} alt="Icon" className='w-5 h-5 text-gray-500' />
        </div>
        <span className='text-gray-700'>{item.bookmark.label}</span>
      </div>
    </div>
  );
}
