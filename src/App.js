import UserProfile from './Components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Fried',
    role: 'Backend Engineer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Fried',
    role: 'Backend Engineer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Fried',
    role: 'Backend Engineer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title"> Users List </h1>
    {userDetailsList.map(each => (
      <UserProfile userDetails={each} />
    ))}
  </div>
)

export default App
