import swal from "sweetalert";


const DonationItemCard = ({ donation }) => {

    const { id, Picture, Title, Description, Price, color_text_button} = donation || {};

    const handelAddToDonation = () => {

        const addDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if (!donationItems) {
            addDonationArray.push(donation)
            localStorage.setItem('donations', JSON.stringify(addDonationArray))
            swal("Good job!", "Donation Completed!", "success");

        }
        else {

            const isExits = donationItems.find(donation => donation.id === id);

            if (!isExits) {
                addDonationArray.push(...donationItems, donation)
                localStorage.setItem('donations', JSON.stringify(addDonationArray))
                swal("Good job!", "Donation Completed!", "success");
            }
            else
            {
                swal("Error!", "No Duplicate!", "error");
            }

        }

       

    }

    return (


        <div>
            <div>
                <div className="relative ">
                    <img className="w-full" src={Picture} alt="" />
                    <div className="bg-blend-overlay bg-cover bg-fixed p-6 bg-black/50 absolute bottom-0 w-full">
                        <button onClick={handelAddToDonation} className=" p-2 text-white font-bold rounded-lg" style={{background: color_text_button}}>Donate ${Price}</button>
                    </div>

                </div>
                <h1 className=" text-3xl py-5">{Title}</h1>
                <p className="py-5 mb-44">{Description}</p>
            </div>

        </div>
    );
};

export default DonationItemCard;