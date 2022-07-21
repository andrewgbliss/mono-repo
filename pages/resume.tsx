import type { NextPage } from 'next';
import { Grid, Box, Divider, Link } from '@mui/material';
import Theme from '../components/theme/Theme';
import { Paper, List, Chips } from '../components/containers';
import Gravatar from '../components/img/Gravatar';
import { H3, H4, H6, Caption, Body2 } from '../components/typography';
import { resume } from '../lib/resume';
import {
  Home as HomeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  DateRange as DateRangeIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

const Resume: NextPage = () => {
  return (
    <Theme>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <Paper>
              <Gravatar email={resume.email} size={256} />
              <H3 py={1}>{resume.name}</H3>
              <Caption color="textSecondary" gutterBottom>
                {resume.bio}
              </Caption>
              <List
                items={[
                  {
                    icon: <HomeIcon />,
                    text: `${resume.address.city}, ${resume.address.state}`,
                  },
                  {
                    icon: <EmailIcon />,
                    text: resume.email,
                    copyText: resume.email,
                  },
                  {
                    icon: <PhoneIcon />,
                    text: resume.phone,
                    copyText: resume.phone,
                  },
                ]}
              />
              <Divider />
              <H6 pt={2}>{resume.education.school}</H6>
              <List
                items={[
                  {
                    icon: <DateRangeIcon />,
                    text: `${resume.education.from} to ${resume.education.to}`,
                  },
                ]}
              />
              <Body2 color="textSecondary" pb={2}>
                {resume.education.name}
              </Body2>
              <Divider />
              <List
                items={resume.links.map((href) => {
                  return {
                    icon: <LinkIcon />,
                    text: (
                      <Caption>
                        <Link
                          target="_blank"
                          rel="noreferrer"
                          color="inherit"
                          href={href}
                          underline="hover"
                        >
                          {href}
                        </Link>
                      </Caption>
                    ),
                  };
                })}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={9}>
            <Paper>
              <H4 gutterBottom>Work Experience</H4>
              {resume.workExperience.map((workExperience, i: number) => {
                return (
                  <Box py={2} key={i}>
                    <H6>
                      {workExperience.title} / {workExperience.company}
                    </H6>
                    <List
                      dense
                      items={[
                        {
                          icon: <DateRangeIcon />,
                          text: `${workExperience.from} - ${workExperience.to}`,
                        },
                      ]}
                    />
                    <List
                      dense
                      items={workExperience.bulletpoints.map((bulletpoint) => {
                        return {
                          text: (
                            <Body2 color="textSecondary">{bulletpoint}</Body2>
                          ),
                        };
                      })}
                    />
                    <Chips chips={workExperience.skills} />
                    <Divider />
                  </Box>
                );
              })}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: 128,
          }}
        >
          <Link
            target="_blank"
            rel="noreferrer"
            color="inherit"
            href={'/'}
            underline="hover"
          >
            andrewgbliss.com
          </Link>
        </Grid>
      </Footer>
    </Theme>
  );
};

export default Resume;
