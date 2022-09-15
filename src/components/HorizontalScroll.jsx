import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

const HorizontalScroll = ({ children }) => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
      
        return (
          <button className="p-2 text-2xl text-gray-400 hover:text-primary duration-300" onClick={() => scrollPrev()}><AiFillLeftCircle /></button>
        );
    };
      
    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
      
        return (
          <button className="p-2 text-2xl text-gray-400 hover:text-primary duration-300" onClick={() => scrollNext()}><AiFillRightCircle /></button>
        );
    };
      

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {children}
        </ScrollMenu>
    )
}

export default HorizontalScroll