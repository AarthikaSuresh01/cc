
const App = () => {
    const [message, setMessage] = useState('Hi there, how are you?');
     useEffect(() => {
      console.log('trigger use effect hook');
   setTimeout(() => {
        setMessage("how are u?");
      }, 11000)
    })
    return <h1>{message}</h1>
  }
  