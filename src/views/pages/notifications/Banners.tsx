// ** React Imports
import { useState, ChangeEvent } from 'react'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import DatePicker from 'react-datepicker'
import CustomInput from 'src/views/forms/form-elements/pickers/react-datepicker/PickersCustomInput'
import FilePicker from 'src/views/forms/form-elements/pickers/file-picker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

const CardContent = styled('div')(({ theme }) => ({
  maxWidth: 870,
  margin: 'auto',
  marginTop: '7%'
})) 
const H2 = styled('h2')(({ theme }) => ({
  fontWeight: 400,
  // margin: 0,
  color: theme.palette.warning.main
}))
const H5 = styled('h4')(({ theme }) => ({
  fontWeight: 500,
  textTransform: 'uppercase',
  color: theme.palette.grey[400]
}))
const Center = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  marginLeft: '5%'
}))

const Banner = () => {
  // ** State
  const [dateOpen, setDateOpen] = useState<DateType>(null)

  return (
    <CardContent>
      <H2>New Banner</H2>

      <form>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}>
            <Center>
              <H5>Upload Image</H5>
            </Center>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid  sm={6}>
              <FilePicker />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Center>
              <H5>Select Package</H5>
            </Center>
          </Grid>
          <Grid item xs={12} sm={9}>
            <FormControl fullWidth>
              <InputLabel>Select one of the packages</InputLabel>
              <Select>
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Center>
              <H5>Date</H5>
            </Center>
          </Grid>
          <Grid sx={{ display: 'flex' }} item xs={12} sm={9}>
            <Grid sx={{ marginRight: 10 }} sm={6}>
              <DatePicker
                selected={dateOpen}
                id='picker-open-date'
                popperPlacement='top-start'
                portalId='react-datepicker-portal'
                openToDate={new Date('1993/09/28')}
                onChange={(date: Date) => setDateOpen(date)}
                customInput={<CustomInput label='Start Date' />}
              />
            </Grid>
            <Grid sm={6}>
              <DatePicker
                selected={dateOpen}
                id='picker-open-date'
                popperPlacement='top-start'
                portalId='react-datepicker-portal'
                openToDate={new Date('1993/09/28')}
                onChange={(date: Date) => setDateOpen(date)}
                customInput={<CustomInput label='End Date' />}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ mr: 4, fontWeight: 500 }}>
              Add Banner
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default Banner
