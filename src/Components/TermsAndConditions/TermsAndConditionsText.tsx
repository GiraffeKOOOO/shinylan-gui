import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import Colours from 'Components/Shared/Colours';

type TermsAndConditionsTextProps = {
  darkMode: boolean;
};

const TermsAndConditionsText: FC<TermsAndConditionsTextProps> = ({ darkMode }) => {
  return (
    <Stack direction="column" justifyContent="center" sx={{ marginTop: '1.5rem' }}>
      <Stack textAlign="left">
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          <ol>
            <li>Participant Conduct</li>
            <li>Equipment Security</li>
            <li>Alcohol & Illegal Substances</li>
            <li>Minimum Age</li>
            <li>Resulting Actions</li>
            <li>Network Usage Policy</li>
            <li>Provision of Facilities</li>
            <li>Photography and Video</li>
            <li>Cancellations</li>
          </ol>
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          1. Participant Conduct
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          Participants must not behave in a manner that will spoil the event for others nor cause
          intentional damage to any property belonging either to other participants, ShinyLAN or the
          venue management.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          2. Equipment Security
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          Neither ShinyLAN nor the venue management are responsible for the loss, damage or theft of
          property belonging to participants at any point during the event. Your equipment is your
          own responsibility. We advise that you take precautions such as not leaving small items
          unsupervised, securing larger items to your desk and procuring your own insurance for your
          property while at the event.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          3. Alcohol & Illegal Substances
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          Participants under the age of 18 years are not permitted to consume alcohol on-site. If
          event staff believe that an individual has consumed excessive alcohol they will not be
          permitted to continue consuming alcohol after being notified. If the participant's
          behaviour may cause harm or upset to other participants as a result they may be
          temporarily or permanently ejected from the event, at the discretion of the event
          management. Participants suspected of being under the influence of any illicit substances
          may be asked to leave the event, at the discretion of the event management. Smoking is not
          permitted inside the venue at any time. Smoking areas are available outside the hall.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          4. Minimum Age
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          Participants under the age of 18 years are permitted to attend the event if agreed to in
          writing by staff in advance. Participants under the age of 16 years are not permitted to
          attend the event.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          5. Resulting Actions
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          Participants failing to adhere to any of these terms and conditions may either receive a
          verbal warning or be asked to leave the event without refund, depending on the severity of
          the breach of terms as determined by the event management. If one section or clause of
          these terms and conditions is found to be unenforceable, the remaining sections or clauses
          will remain enforceable
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          6. Network Usage Policy
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          The following usage policy is in place to maintain network stability and quality for all
          participants. By connecting to the ShinyLAN network you agree to the following: You will
          not use the provided event network for any illegal or illicit activities, including but
          not limited to: distribution of copyrighted materials for which you do not hold permission
          to distribute, illegal materials or malicious software including that intended to cause
          harm, damage or disruption to the event network, event systems or other participants. You
          will not disrupt network services or internet access for other participants. Access to the
          internet is provided by a third party on a best endeavour basis, and is not a guaranteed
          benefit of ticket purchase. You will ensure any devices you control that are connected to
          the event network are free from malicious software prior to attending the event, and that
          any devices you control are kept secure and protected from malicious software during the
          event. You are responsible for your own security and protection during the event. If event
          management suspect that one of your devices is distributing malicious software, or is
          deemed to be inadequately secure, your network access for all your devices will be revoked
          until the suspected issue is resolved to the satisfaction of event management. Event
          management is not responsible for the security of your device. Any breach of the network
          usage policy may result in your network access being revoked for the duration of the
          event.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          7. Provision of Facilities
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          You are not permitted to plug anything into the event power systems other than your PC
          (and related peripherals), Monitor, Mobile Phone/Camera Chargers or similar. Non-PC
          related items (e.g. microwaves, kettles, desk fans, refrigerators) are not permitted. The
          event management accepts no liability for any damage or consequences resulting from usa of
          the event power system. We strongly recommend that you bring surge protected power adapter
          to protect your own hardware.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          8. Photography and Video
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          During the event, ShinyLAN staff may take photos and video which are later shared online.
          If you do not wish to appear in any of the photos or videos please notify the member of
          staff taking photos or filming at the time.
        </Typography>
      </Stack>
      <Stack textAlign="left" sx={{ marginY: '0.5rem' }}>
        <Typography
          sx={{
            color: darkMode ? Colours.darkText : Colours.lightText,
            fontSize: '1.5rem',
            letterSpacing: '-1.5px',
            fontFamily: 'Varela Round',
          }}
        >
          9. Cancellations
        </Typography>
        <Typography sx={{ color: darkMode ? Colours.darkText : Colours.lightText }}>
          If you are unable to attend the event, please notify any member of staff as soon as
          possible. If your notification is received whilst the early bird offer is still available,
          your ticket will be refunded minus a £5 admin fee to cover our payment provider fees.
          Notifications received after the early bird offer is closed will not be refunded unless
          the event is full and your place can be sold to the next person on the waiting list, in
          which case the £5 administration fee will still apply. You may also choose to have your
          ticket carried forward to our next event instead of being refunded. A ticket may only be
          carried forward in this manner once.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TermsAndConditionsText;
