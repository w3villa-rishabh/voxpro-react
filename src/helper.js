  
  export const handleUser = () => {
        let data = localStorage.getItem('user')
        let userData = data ? JSON.parse(data) : null
        // const [user, setUser] = useState(userData);
        console.log("helper >>", userData)
        return userData
      }

      // export default {handleUser}