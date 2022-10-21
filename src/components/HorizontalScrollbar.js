import React, {useContext} from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box sx={{mx: {lg: '7px', sm: '7px',xs: '3px'}}}
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                >
                   {isBodyParts ?  <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} /> }
                </Box>
                ) 
                )}
            </ScrollMenu>
    )
}

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow" >
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    )
  }
export default HorizontalScrollbar;