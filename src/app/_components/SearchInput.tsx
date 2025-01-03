import { Input } from "@/components/ui/input";

export const SearchInput = ({ handleChanger }) => {
  return (
    <>
      <div>
        <Input onChange={handleChanger} />
      </div>
    </>
  );
};
