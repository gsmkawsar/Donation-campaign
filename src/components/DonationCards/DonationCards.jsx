import DonationCard from "./DonationCard";

const DonationCards = ({ donationCards }) => {

    return (
        <div className="py-10">

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    donationCards?.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default DonationCards;