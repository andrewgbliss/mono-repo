import {
  List as Container,
  ListProps,
  ListItem as ListItemContainer,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

interface ListItem {
  icon?: React.ReactNode;
  text: string | React.ReactNode;
  copyText?: string;
}

interface Props extends ListProps {
  items: Array<ListItem>;
}

async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

export const List: React.FC<Props> = (props) => {
  return (
    <Container {...props}>
      {props.items.map((item, i: number) => {
        return (
          <ListItemContainer key={i} disablePadding>
            <ListItemButton
              onClick={() =>
                item?.copyText && copyTextToClipboard(item?.copyText)
              }
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} sx={{ overflow: 'hidden' }} />
            </ListItemButton>
          </ListItemContainer>
        );
      })}
    </Container>
  );
};
