import { useRef, useState } from "react";
import { Box } from "@mui/material";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
const Filter = () => {
  const [value, setValue] = useState('');
  // ini nanti di kali 3 sama diganti di setiap select sama fungsi close "X" nya ya sist :) aku mager
  const action = useRef(null);
  return (
    <Box>
      {/* Content Select */}
      <Box className="flex flex-row gap-4">
        {/* Select Category */}
        <Select
        action={action}
        value={value}
        placeholder="Category"
        onChange={(e, newValue) => setValue(newValue)}
        {...(value && {
          endDecorator: (
            <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
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

        sx={{ width:'14vw', color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
          <Option value="Anime">Anime</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
        {/* Select Genre */}
        <Select
        action={action}
        value={value}
        placeholder="Genre"
        onChange={(e, newValue) => setValue(newValue)}
        {...(value && {
          endDecorator: (
            <IconButton
            size="sm"
            variant="plain"
              color="neutral"
              onMouseDown={(event) => {
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
        
        sx={{ width:'14vw', color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
          <Option value="Anime">Anime</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
        {/* Select Sort by */}
        <Select
        action={action}
        value={value}
        placeholder="Sort by"
        onChange={(e, newValue) => setValue(newValue)}
        {...(value && {
          endDecorator: (
            <IconButton
            size="sm"
            variant="plain"
              color="neutral"
              onMouseDown={(event) => {
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
        
        sx={{ width:'10vw', color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
          <Option value="Anime">Anime</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
      </Box>
      {/* Content Chip */}
      {/* Content List Hasil Filter */}
    </Box>
  );
}

export default Filter;