// ** MUI Imports
import CameraImage from 'mdi-material-ui/CameraPlus'
import { styled } from '@mui/material/styles'

//Styles
const ImageBox = styled('div')(({ theme }) => ({
  position: 'relative',
	display: 'inline-block',
  width:'100%',
  height:140,
  border:'1px solid #52566c',
  borderRadius:15,
  cursor:'pointer'
}))
const Center = styled('div')(({ theme }) => ({
 	display: 'flex',
  width:'100%',
  height:'100%',
  justifyContent:'center',
  alignItems:'center'

}))
const InputFile = styled('input')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  fontSize: 1,
  width:'100%',
  height: '100%',
  opacity: 0,
}))


const TextareaBasic = ({onChange}:{onChange:any}) => {
  return (
    <>
      <ImageBox >
          <Center >
          <CameraImage sx={{color:'#3b3d54',fontSize:'2.5rem'}}/>
          </Center>
        <InputFile onChange={onChange} id='upload' className='file-upload__input' type='file' name='file-upload' />
      </ImageBox>
    </>
  )
}

export default TextareaBasic
