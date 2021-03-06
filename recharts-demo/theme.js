import { deep } from '@theme-ui/presets'

const theme = {
  ...deep,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      height: '400px',
      m: 0,
      mx: 'auto',
    },
  },
  button: {
    padding: '20px',
    margin: '5px',
    backgroundColor: 'primary'
  },
  headerText:{
    textAlign: 'center',
    marginBottom: 0,
  },
  slideText: {
    width: '60%',
  },
  link:{
    color: 'pink'
  },
  photoRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  Image: {
    paddingLeft: '300px'
  },
  styles: {
    ...deep.styles,
    
  }
}
console.log(theme)

export default theme