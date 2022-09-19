import { Paper as Container, PaperProps, Box } from '@mui/material';

interface Props extends PaperProps {
  children: React.ReactNode;
}

export const Paper: React.FC<Props> = ({ children }) => {
  return (
    <Container elevation={8}>
      <Box p={2}>{children}</Box>
    </Container>
  );
};
