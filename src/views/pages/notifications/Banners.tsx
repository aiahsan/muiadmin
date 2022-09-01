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
import { Form, Formik } from 'formik'
import { BannerSchema } from 'src/yupSchema'
import moment from 'moment'
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
const Error = styled('p')(({ theme }) => ({
  color: 'red',
}))

const Banner = () => {
  // ** State
  const [dateOpen, setDateOpen] = useState<DateType>(null)

  return (
    <CardContent>
      <H2>New Banner</H2>

      <Formik
        initialValues={{
          image: '',
          package: '',
          startDate: '',
          endDate: ''
        }}
        enableReinitialize={true}
        validationSchema={BannerSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          
        }}
      >
        {({ errors, touched, setFieldValue, values }) => {
          return (
            <Form>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={3}>
                  <Center>
                    <H5>Upload Image</H5>
                  </Center>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Grid sm={6}>
                    <FilePicker onChange={(e:any)=>setFieldValue("image",e.target.value)}/>
                    {touched.image && errors.image && <Error>{errors.image}</Error>}

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
                    <Select onChange={(e)=>setFieldValue("package",e.target.value)}>
                      <MenuItem value='active'>Active</MenuItem>
                      <MenuItem value='inactive'>Inactive</MenuItem>
                      <MenuItem value='pending'>Pending</MenuItem>
                    </Select>
                  </FormControl>
                  {touched.package && errors.package && <Error>{errors.package}</Error>}

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
                      onChange={(date: Date) => setFieldValue('startDate',date)}
                      customInput={<CustomInput label='Start Date' />}
                      value={values.startDate?moment(values?.startDate).format('ddd-MM-yyyy'):"" }
                    />
                  {touched.startDate && errors.startDate && <Error>{errors.startDate}</Error>}

                  </Grid>
                  <Grid sm={6}>
                    <DatePicker
                      selected={dateOpen}
                      id='picker-open-date'
                      popperPlacement='top-start'
                      portalId='react-datepicker-portal'
                      openToDate={new Date('1993/09/28')}
                      onChange={(date: Date) => setFieldValue('endDate',date)}
                      customInput={<CustomInput label='End Date' />}
                      value={values.endDate?moment(values?.endDate).format('ddd-MM-yyyy'):"" }
                    />
                     {touched.endDate && errors.endDate && <Error>{errors.endDate}</Error>}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button type={'submit'} variant='contained' sx={{ mr: 4, fontWeight: 500 }}>
                    Add Banner
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )
        }}
      </Formik>
    </CardContent>
  )
}

export default Banner
