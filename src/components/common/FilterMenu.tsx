/** @format */

type FilterMenuProps = {
  showFilterMenu: boolean;
};

const FilterMenu = ({ showFilterMenu }: FilterMenuProps) => {
  return (
    <ul
      className={`absolute top-10 -right-40 w-[300px] flex flex-col items-start bg-red-500 shadow-lg rounded-lg p-4 h-[200px] ${
        showFilterMenu ? 'flex' : 'hidden'
      }`}
    >
      <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Option 1</li>
      <li>Hello world!</li>
    </ul>
  );
};

export default FilterMenu;
