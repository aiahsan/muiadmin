// ** React Imports
import { SyntheticEvent, useState } from 'react'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'
import AccountOutline from 'mdi-material-ui/Send'
import LockOpenOutline from 'mdi-material-ui/MessageAlert'
import InformationOutline from 'mdi-material-ui/CheckboxBlank'
import Banners from 'src/views/pages/notifications/Banners'
import 'react-datepicker/dist/react-datepicker.css'
import Typography from '@mui/material/Typography'
import { useSettings } from 'src/@core/hooks/useSettings'

//Styles
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  },
  marginTop: 10
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  marginLeft: 4
}))

const H2 = styled('h2')(({ theme }) => ({
  fontWeight: 300,
  margin: 0,
  color: theme.palette.warning.main
}))

const Div = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(2.5)
}))

const AccountSettings = () => {
  const { settings } = useSettings()
  // ** State
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Div>
      <H2>Notifications</H2>
      <Typography variant='subtitle2' sx={{ mb: 2, fontWeight: 100 }}>
        Every bit of details for every verification done..
      </Typography>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{
            borderBottom: theme => `1px solid ${theme.palette.divider}`,
            backgroundColor: settings.mode == 'dark' ? '#30334e' : ''
          }}
        >
          <Tab
            value='notifications'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline sx={{ fontSize: '1.125rem' }} />
                <TabName>Dashboard Notifications</TabName>
              </Box>
            }
          />
          <Tab
            value='emailannouncement'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline sx={{ fontSize: '1.125rem' }} />
                <TabName>Email Announcement</TabName>
              </Box>
            }
          />
          <Tab
            value='banners'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline sx={{ fontSize: '1.125rem' }} />
                <TabName>Banners</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='banners'>
          <Banners />
        </TabPanel>
      </TabContext>
    </Div>
  )
}

export default AccountSettings
