import { FC, SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Colours from 'Components/Shared/Colours';
import { useNavigate } from 'react-router';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid ${Colours.faqAccordionBorderGrey}`,
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: Colours.lightBackgroundFooter,
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

type FaqSectionProps = {
  darkMode: boolean;
};

const FaqSection: FC<FaqSectionProps> = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack
      sx={{
        width: '80rem',
        marginX: 'auto',
        // TODO: need to change managing space
        marginBottom: '2rem',
      }}
    >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">What is a ShinyLAN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>ShinyLAN is a 72 hour social gaming event.</Typography>
          <Typography>
            We play lots of PC games over the network but we mix in a lot of board games, card games
            plus random fun stuff such as our pub quiz or LOLympics
          </Typography>
          <Typography>We often BBQ one evening.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">What is the venue like?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The hall has a main room where we setup tables which people can use to setup their
            devices
          </Typography>
          <Typography>
            There is also a large side room we use as our social area for board games
          </Typography>
          <Typography>
            There is a kitchen with an oven, hobs and a microwave but fridge space is limited and
            they don't have a freezer compartment
          </Typography>
          <Typography>
            Hot water on demand is available for instance snacks, and there are toilets but no
            showers so get your stink on
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">How do I get to ShinyLAN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The venue address is:</Typography>
          <Typography>Kettle Bridge Lane, Cerne Abbas, DORCHESTER, Dorset DT2 7GY</Typography>
          <Typography>
            There is on site parking outside the hall. Please do not park like a moron
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component="span">Where can I get food?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The nearest supermarket, Tesco is about 4 miles away. Weymouth Ave, Dorchester DT1 2RY
            There are a few local takeaways via Just Eat who will deliver to the hall
            <a
              href="https://www.just-eat.co.uk/area/dt2-dorchester "
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: '0.3rem' }}
            >
              https://www.just-eat.co.uk/area/dt2-dorchester
            </a>
            . If you wish to use the kitchen please clean up after (there is a dishwasher, sinks
            etc). Cutlery, plates and cups are provided but bring your own pots, pans and cooking
            utensils. There are cookers, microwave, kettle but limited fridge space
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography component="span">Can I bring alcohol?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Of course, but drink responsibly. You can read our policy on alcohol in our event{' '}
            <a
              onClick={() => navigate('/terms-and-conditions')}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              terms and conditions
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography component="span">How old do I have to be?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>ShinyLAN events are for people ages 18+ only</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography component="span">What do I need to bring?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left">
            <li>Computer / Laptop / Xbox / Playstation or some other fun device that goes boop</li>
            <li>
              4-way power adapter, power cables, keyboard, mouse and any other bits for your booping
              device
            </li>
            <li>
              Headphones are a MUST (speakers are not allowed but the Hall has a sound system we use
              for films and light background music)
            </li>
            <li>
              Sleeping stuff. e.g.: Airbed, pillows, duvet or sleeping bag plus your favourite
              teddy. (Note, Please be considerate of others, bringing an american size bed and not
              sharing is considered rude, please bring single beds where possible)
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography component="span">Do I need to set up my computer for the network?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Normally you can just arrive, plug in and log on</Typography>
          <Typography>
            However, if you share your internet connection from your PC you might need to disable
            this. We can help if you have any issues - just ask staff for assistance
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography component="span">How much money do you make?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We operate the LANs on a not for profit basis, all profits are invested back into the
            event in the form of better equipment, better prizes, ticket price reductions etc.
          </Typography>
          <Typography>
            We do sometimes allow some cash to build up so we can choose to operate an event at a
            loss should the need arise
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default FaqSection;
