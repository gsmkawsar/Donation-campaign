import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationItemCard from "../DonationItemCard/DonationItemCard";


const DonationItem = () => {

    const [donation, setDonations] = useState({})

    const { id } = useParams();

    const donations = useLoaderData();


    useEffect(() => {
        const findDonation = donations?.find((donation) => donation.id == id);
        setDonations(findDonation)
  
    }, [id, donations]);
   

    return (
        <div>
           <DonationItemCard donation={donation} ></DonationItemCard>
        </div>
    );
};

export default DonationItem;