import { Box, Grid, Chip } from '@mui/material';

interface Props {
  chips: Array<string>;
}

export const Chips: React.FC<Props> = ({ chips }) => {
  return (
    <Box pb={2} pl={2}>
      <Grid container>
        {chips.map((chip) => (
          <Grid item key={chip}>
            <Box paddingTop={1} paddingRight={1}>
              <Chip label={chip} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
