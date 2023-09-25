import { useLoaderData } from "react-router-dom";
import DonationCards from "../../components/DonationCards/DonationCards";
import Banner from "../../components/Header/NavBar/Banner/Banner";


const Home = () => {
    const donationCards = useLoaderData()

    return (
        <div>
            <Banner></Banner>

            <div>

            </div>
            <DonationCards donationCards={donationCards}></DonationCards>
        </div>
    );
};

export default Home;