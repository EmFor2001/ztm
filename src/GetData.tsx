import { useEffect, useState } from "react";

const GetData = () => {
    const [data, setData] = useState(null);


    useEffect(()=>{
        fetch('https://ckan2.multimediagdansk.pl/departures?stopId=1979')
        .then((response) => console.log(response));
    },[])

}
 
export default GetData;