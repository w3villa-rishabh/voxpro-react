import React from 'react';
import { ClipLoader } from 'react-spinners';
export default function LoaderComponent() {
  return (
    <>
      <div className="m-3">
        <ClipLoader color={'var(--primary)'} loading={true} />
      </div>
    </>
  );
}
