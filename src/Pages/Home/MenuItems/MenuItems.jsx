import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const MenuItems = () => {
    // const [items, setItems] = useState([]);
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');


    return (
        <div className='py-16  w-10/12 mx-auto text-center'>
            <SectionTitle
                subHeading={"--- Check It Out ---"}
                heading={"From Our menu"}
            />

            <div className='md:grid grid-cols-2 gap-8 my-12 px-4 space-y-7 md:space-y-0'>
                {
                    popularItems?.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        />)
                }
            </div>
            <button className='btn btn-outline btn-warning w-40 mx-auto border-0 border-b-4 hover:border-b-4 '>View Full Menu</button>

        </div>
    );
};

export default MenuItems;