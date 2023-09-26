import { useEffect, useState } from "react";
import DonationAdd from "./DonationAdd";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDonation, setNoDonation] = useState("");
    const [isShow, setIsShow] = useState(false);

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
        setDonations([]);
        setNoDonation('No Donation');
    }


    return (
        <div>
            {noDonation ? <p className="h-[80vh] flex justify-center items-center">{noDonation}</p>
                : <div>
                    {donations.length > 0 && <button onClick={handelRemove} className="px-5 font-bold py-3 text-white bg-[#009444] block rounded-lg mx-auto">Delete All Donation</button>}

                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                        {
                            isShow ? donations.map(donation => <DonationAdd key={donation.id} donation={donation} ></DonationAdd>)
                                :
                                donations.slice(0, 4).map(donation => <DonationAdd key={donation.id} donation={donation} ></DonationAdd>)
                        }
                    </div>

                    { 
                    donations.length > 4 &&                     <button onClick={() => setIsShow(!isShow)} className="px-5 font-bold py-3 text-white bg-[#009444] rounded-lg block mx-auto">{ isShow ? "See Less" : "See More"}</button>
                    }

                </div>}

        </div>
    );
};

export default Donation;