
const DonationCard = ({ donationCard }) => {


    const { Picture, Title, Category, Colors } = donationCard || {};
    console.log(Colors[1])
    return (
        <div>
            <div className="max-w-sm bg-slate-300 rounded-lg shadow ">
                <img className="rounded-t-lg" src={Picture} alt={Title} />
                <div className="p-2">
                    <p className="text-red-600 bg-slate-400 font-bold rounded-lg w-/3">{Category}</p>
                    <h5 className={`text-1xl font-bold text-[${Colors[0]}]`}>{Title}</h5>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;