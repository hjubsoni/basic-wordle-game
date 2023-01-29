import React from 'react';

function Row({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  return <div className="flex gap-4">{children}</div>;
}

export default Row;
