import { useRef, useState } from "react";
import { Box } from "@mui/material";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
const Filter = () => {
  const [value, setValue] = useState('');
  const action = useRef(null);
  return (
    <Box>
      <Select
      action={action}
      value={value}
      placeholder="Category"
      onChange={(e, newValue) => setValue(newValue)}
      {...(value && {
        // display the button and remove select indicator
        // when user has selected a value
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              // don't open the popup when clicking on this button
              event.stopPropagation();
            }}
            onClick={() => {
              console.log(value);
              setValue(null);
              action.current.focusVisible();
            }}
          >
            <CloseRounded />
          </IconButton>
        ),
        indicator: null,
      })}

      sx={{ maxWidth: 200, color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
      <Option value="Anime">Anime</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
    
    </Box>
  );
}
 
export default Filter;