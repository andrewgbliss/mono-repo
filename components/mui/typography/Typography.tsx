import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface Props extends TypographyProps {
  children: React.ReactNode;
  component?: string;
}

export const H1: React.FC<Props> = (props) => {
  return (
    <Typography variant="h1" {...props}>
      {props.children}
    </Typography>
  );
};

export const H2: React.FC<Props> = (props) => {
  return (
    <Typography variant="h2" {...props}>
      {props.children}
    </Typography>
  );
};

export const H3: React.FC<Props> = (props) => {
  return (
    <Typography variant="h3" {...props}>
      {props.children}
    </Typography>
  );
};

export const H4: React.FC<Props> = (props) => {
  return (
    <Typography variant="h4" {...props}>
      {props.children}
    </Typography>
  );
};

export const H5: React.FC<Props> = (props) => {
  return (
    <Typography variant="h5" {...props}>
      {props.children}
    </Typography>
  );
};

export const H6: React.FC<Props> = (props) => {
  return (
    <Typography variant="h6" {...props}>
      {props.children}
    </Typography>
  );
};

export const Subtitle1: React.FC<Props> = (props) => {
  return (
    <Typography variant="subtitle1" {...props}>
      {props.children}
    </Typography>
  );
};

export const Subtitle2: React.FC<Props> = (props) => {
  return (
    <Typography variant="subtitle2" {...props}>
      {props.children}
    </Typography>
  );
};

export const Body1: React.FC<Props> = (props) => {
  return (
    <Typography variant="body1" {...props}>
      {props.children}
    </Typography>
  );
};

export const Body2: React.FC<Props> = (props) => {
  return (
    <Typography variant="body2" {...props}>
      {props.children}
    </Typography>
  );
};

export const Button: React.FC<Props> = (props) => {
  return (
    <Typography variant="button" {...props}>
      {props.children}
    </Typography>
  );
};

export const Caption: React.FC<Props> = (props) => {
  return (
    <Typography variant="caption" {...props}>
      {props.children}
    </Typography>
  );
};

export const Overline: React.FC<Props> = (props) => {
  return (
    <Typography variant="overline" {...props}>
      {props.children}
    </Typography>
  );
};
