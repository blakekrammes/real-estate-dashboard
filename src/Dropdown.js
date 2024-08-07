import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { uniqBy } from 'lodash';

const Dropdown = ({ items, setSelectedTown }) => {
  return (
    <div className='fixed top-24 w-52 text-right'>
      <Menu>
        <MenuButton className='inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
          Towns
          <ChevronDownIcon className='size-4 fill-white/60' />
        </MenuButton>
        <MenuItems
          transition
          anchor='bottom'
          className='w-52 origin-top-right rounded-xl border border-gray-800 bg-gray-800 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
        >
          {items && items.length > 0
            ? uniqBy(items, 'Town').map((i) => (
                <MenuItem key={i.MLS}>
                  <button
                    onClick={() => setSelectedTown(i.Town)}
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'
                  >
                    {i.Town}
                  </button>
                </MenuItem>
              ))
            : null}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Dropdown;
