"use client";

export const ClientComponent = (myObjectProp: any) => {
  return <pre>{JSON.stringify(myObjectProp)}</pre>;
};
