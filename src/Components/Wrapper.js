import loading from '../loading.gif';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
import SearchingFlights from './SearchingFlights';


const { useState, useEffect } = require("react")


const Wrapper = () => {
     
    
    const [apiData, setApiData] = useState(null);
    //  Todo if we will have time showing the location of the user 


    // YOUR_AFFILID: data4youcbp202106
    const YOUR_AFFILID = 'data4youcbp202106';
    const url = `https://api.skypicker.com/flights?fly_from=PRG&partner=${YOUR_AFFILID}`

    const fetchingData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setApiData(data);
    }


    useEffect(() => {
        fetchingData();
    },[])


    return (
        <>
        <Header />
        <SearchingFlights />
        {
        apiData && apiData.currency ? <Cards data={apiData} /> : <img src={loading}/>
        }

        <Footer />
        </>
    )
}

export default Wrapper;