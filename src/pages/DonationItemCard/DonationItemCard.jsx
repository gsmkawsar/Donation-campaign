import swal from "sweetalert";


const DonationItemCard = ({ donation }) => {

    const { id, Picture, Title, Category, Colors, Description, Price } = donation || {};

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
                <div>
                    <img className="w-full" src={Picture} alt="" />
                    <div className="bg-blend-overlay bg-cover bg-fixed ">
                        <button onClick={handelAddToDonation} className="bg-red-600 p-2 text-white font-bold rounded-lg">Donate ${Price}</button>
                    </div>

                </div>
                <h1 className=" text-3xl py-5">{Title}</h1>
                <p className="py-5">{Description}</p>
            </div>


        </div>
    );
};

export default DonationItemCard;