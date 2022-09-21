import React, { useState, useEffect, useMemo } from 'react';
import {
  useFirebase,
  saveBid,
  getBid,
} from '../../../lib/bid-calculator/firebase';
import {
  Grid,
  Button,
  Typography,
  TextField,
  Snackbar,
  Box,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

type Item = {
  text: string;
  hours: number;
};

type ItemsProps = {
  items: Array<Item>;
  addNewItem: Function;
  removeItem: Function;
  updateItem: Function;
};

const Items: React.FC<ItemsProps> = ({
  items,
  addNewItem,
  removeItem,
  updateItem,
}) => {
  const [text, setText] = useState('');
  const [hours, setHours] = useState(8);
  return (
    <div>
      <Typography>
        Please enter an itemized list of each task. Each task description and an
        estimate of how many hours it will take to accomplish.
      </Typography>
      {items.map((item, index) => {
        return (
          <Grid container key={index} spacing={2}>
            <Grid item xs={7}>
              <TextField
                id="item"
                label="Item"
                value={item.text}
                margin="normal"
                fullWidth
                onChange={(e) =>
                  updateItem(index, {
                    ...item,
                    text: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="hours"
                label="Hours"
                value={item.hours}
                margin="normal"
                fullWidth
                onChange={(e) =>
                  updateItem(index, {
                    ...item,
                    hours: e.target.value,
                  })
                }
                type="number"
              />
            </Grid>
            <Grid item xs={1}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ width: '100%', height: '100%' }}
              >
                <Grid item>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <TextField
            id="newItem"
            label="New Item"
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="hours"
            label="Hours"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            margin="normal"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Box py={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addNewItem({
              text,
              hours,
            });
            setText('');
            setHours(8);
          }}
          disabled={!text}
        >
          Add New Item
        </Button>
      </Box>
    </div>
  );
};

type CalculatorProps = {
  id?: string;
};

export const Calculator: React.FC<CalculatorProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [name, setName] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [rate, setRate] = useState(100);

  const [items, setItems] = useState<Array<Item>>([]);

  const estimatedHours = items.reduce((sum, item) => {
    return sum + Number(item.hours);
  }, 0);

  const weeks = useMemo(() => {
    if (estimatedHours > 0 && daysPerWeek && hoursPerDay) {
      const hoursPerWeek = Number(daysPerWeek) * Number(hoursPerDay);
      return Number(estimatedHours) / Number(hoursPerWeek);
    }
    return 0;
  }, [estimatedHours, daysPerWeek, hoursPerDay]);

  const totalCost = useMemo(() => {
    if (estimatedHours > 0 && rate && hoursPerDay) {
      return Number(estimatedHours) * Number(rate);
    }
    return 0;
  }, [estimatedHours, rate]);

  useEffect(() => {
    const fetchBid = async () => {
      try {
        const bid = await getBid(id);
        if (bid) {
          setName(bid.name);
          setDaysPerWeek(bid.daysPerWeek);
          setHoursPerDay(bid.hoursPerDay);
          setRate(bid.rate);
          setItems(bid.items);
        }
      } catch (e) {
        console.error(e);
        setSnackbarMsg('Could not load bid');
      }
    };

    if (id) {
      fetchBid();
    }
  }, [id]);

  const handleSave = async () => {
    const newId = await saveBid(id, {
      name,
      items,
      daysPerWeek,
      hoursPerDay,
      rate,
    });
    if (newId !== id) {
      window.location.href = `/bid-calculator/${newId}`;
    }
    setOpen(true);
    setSnackbarMsg('Saved Successful');
  };

  const addNewItem = (item: any) => {
    setItems([...items, item]);
  };
  const updateItem = (index: any, item: any) => {
    setItems([...items.slice(0, index), item, ...items.slice(index + 1)]);
  };
  const removeItem = (index: any) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  useFirebase();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            label="Bid Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Box py={2}>
        <Divider />
      </Box>
      <Items
        items={items}
        addNewItem={addNewItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />
      <Box py={2}>
        <Divider />
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            label="Estimated Hours"
            value={estimatedHours}
            type="number"
            disabled
          />
        </Grid>
        <Grid item>
          <Typography>
            You can estimate how many weeks, days per week, hours per day, and
            rate, to calculate the total cost.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                label="Days Per Week"
                value={daysPerWeek}
                onChange={(e) => {
                  setDaysPerWeek(Number(e.target.value));
                }}
                type="number"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Hours Per Day"
                value={hoursPerDay}
                onChange={(e) => {
                  setHoursPerDay(Number(e.target.value));
                }}
                type="number"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Weeks To Completion"
                value={weeks}
                type="number"
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                label="Rate Per Hour"
                value={rate}
                onChange={(e) => {
                  setRate(Number(e.target.value));
                }}
                type="number"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Total Cost"
                value={totalCost}
                type="number"
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleSave}
                disabled={items.length === 0}
              >
                Save Bid
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => (window.location.href = '/bid-calculator')}
              >
                New Bid
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={snackbarMsg}
        autoHideDuration={3000}
      />
    </>
  );
};
