import React from 'react';

function Row({
  children,
  rowId,
}: {
  children: React.ReactNode;
  rowId: number;
}) {
  return (
    <div className="flex gap-4" id={rowId.toString()}>
      {children}
    </div>
  );
}

export default Row;
