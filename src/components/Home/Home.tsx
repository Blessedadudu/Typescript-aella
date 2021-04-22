import './Home.scss'
import Navbar from "../Navbar/Navbar"

const Home = () => {
    return (
        <main className='home'>
            <Navbar/>
            <div className='text flex--3'>
                <div>
                    <h1>SWAPI</h1>
                    <h3>The Star Wars API</h3>
                </div>
            </div>
        </main>
    )
}

export default Home
