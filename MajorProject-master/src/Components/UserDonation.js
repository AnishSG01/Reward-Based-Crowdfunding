import React from "react";
import DonateCard from "./DonateCard";

function UserDonation({ donationcamp }) {

  return (
    <div className="donate-main">
      <div className="donate-header">
        <h2>Donation Camp</h2>
      </div>
      <div className="donate-content">
        {donationcamp.map((item) => {
          return (
            <>
              {item.isApproved === true && (
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
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default UserDonation;
