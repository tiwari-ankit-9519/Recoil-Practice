import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

export default function Button() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase the Count
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrease the Count
      </button>
    </div>
  );
}
