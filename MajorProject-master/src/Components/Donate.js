import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/donate.css";
import DonateCard from "./DonateCard";
import UserDonation from "./UserDonation";

function Donate() {
  const Donations = [
    {
      id: 1,
      organisation: "JSW Steel",
      phone: 7738649525,
      email: "JSW@gmail.com",
      Desc: "This is schlorship provided for Higher education",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOvo7RruMWPKMBVujQHG5IGZylIXYGutDDg&usqp=CAU",
      DocumentUrl:
        "https://thumbs.dreamstime.com/b/hand-putting-coin-jar-word-donation-money-stack-concept-business-finance-investment-hand-putting-coin-jar-word-107593989.jpg",
      Cause: "Education Purpose",
      detail:
        "This will be an schlorship Providing Scheme for higher education of talented student Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum harum doloremque quidem amet eius et nostrum dolor non? Odio, consectetur!",
      isApproved: false,
    },
    {
      id: 2,
      organisation: "Tata Trust",
      phone: 9138649525,
      email: "TATATrust@gmail.com",
      Desc: "This is schlorship provided for Abroad education",
      posterUrl:
        "https://uploads-ssl.webflow.com/61b9a0d531bc5ea62566a3be/6229ba3318f7b923841355bc_9.png",
      DocumentUrl:
        "https://thumbs.dreamstime.com/b/hand-putting-coin-jar-word-donation-money-stack-concept-business-finance-investment-hand-putting-coin-jar-word-107593989.jpg",
      Cause: "Education Purpose",
      detail:
        "This will be an schlorship Providing Scheme for higher education of talented student  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum harum doloremque quidem amet eius et nostrum dolor non? Odio, consectetur!",
      isApproved: true,
    },
    {
      id: 3,
      organisation: "Shriram Finance",
      phone: 8938649525,
      email: "ShriamFinance@gmail.com",
      Desc: "This is schlorship provided for education",
      posterUrl:
        "https://m.economictimes.com/thumb/msid-96008375,width-1442,height-900,resizemode-4,imgsize-14772/shriram-group-operationalises-largest-retail-nbfc-shriram-finance-to-focus-on-non-vehicle-financing.jpg",
      DocumentUrl:
        "https://blockchainappmaker.com/wp-content/uploads/2021/10/Crowdfunding-Platform-Software-vector-image.png",
      Cause: "Education Purpose",
      detail:
        "This will be an schlorship Providing Scheme for higher education of student  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum harum doloremque quidem amet eius et nostrum dolor non? Odio, consectetur!",
      isApproved: false,
    },
  ];

  const [Donatelist, setDonateList] = useState([{}]);

  const getList = () => {
    axios
      .get("http://localhost:4000/api/donations")
      .then((res) => setDonateList(res.data.data))
      .catch((err) => console.log(err.message));
  };

  let user = JSON.parse( sessionStorage.getItem('user'))

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {user.role === "admin" && (
        <div className="donate-main">
          <div className="donate-header">
            <h2>Reqested Donation Camp</h2>
          </div>
          <div className="donate-content">
            {Donatelist.map((item) => {
              return (
                <>
                  {/* {!item.isProcessed && <DonateCard */}
                  {
                    <DonateCard
                      key={item._id}
                      id={item._id}
                      name={item.organisation}
                      phone={item.phone}
                      email={item.email}
                      desc={item.description}
                      posterUrl={item.posterUrl}
                      documentUrl={item.documentUrl}
                      cause={item.cause}
                      detail={item.detail}
                      isApproved={item.isApproved}
                    />
                  }
                </>
              );
            })}
          </div>
        </div>
      )}

      {user.role === "user" && <UserDonation donationcamp = {Donatelist} />}
      
    </>
  );
}

export default Donate;
