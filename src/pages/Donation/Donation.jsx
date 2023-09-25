import { useEffect, useState } from "react";
import DonationAdd from "./DonationAdd";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDonation, setNoDonation] = useState("")

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if (donationItems) {
            setDonations(donationItems)
        }
        else {
            setNoDonation('No Donation')
        }

    }, [])
    const handelRemove = () => {
        localStorage.clear();
        // setDonations([]);
        // setNoDonation('No Donation');
    }


    return (
        <div>
            {noDonation ? <p className="h-[80vh] flex justify-center items-center">{noDonation}</p>
                : <div>
                    {donations.length > 0 && <button onClick={handelRemove} className="px-5 bg-green-400 block mx-auto">Delete All Donation</button>}
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                        {donations.map(donation => <DonationAdd key={donation.id} donation={donation} ></DonationAdd>)}
                    </div>

                </div>}

        </div>
    );
};

export default Donation;