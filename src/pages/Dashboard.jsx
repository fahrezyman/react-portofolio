import { Link } from "react-router-dom"
import Button from "../components/Button"
import Profile from "./Profile"

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      
      
      <div>
        <Button style={{
          color: 'red'
        }}>
          Hitung 1
        </Button>
        
        <Button style={{
          color: 'blue'
        }}>
          Hitung 2
        </Button>
        <Button style={{
          color: 'green'
        }}>
          Hitung 3
        </Button>
      </div>

      <div>
        <Link to='/profile'>
          link ke halaman Profile
        </Link>
      </div>
    </>
  )
}

export default Dashboard