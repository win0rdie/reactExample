import { useState, useEffect } from "react";

export default function useLocalStorage(
  key,
  defaultValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse
) {
  //кастомний хук
  const [state, setState] = useState(() => {
    return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
