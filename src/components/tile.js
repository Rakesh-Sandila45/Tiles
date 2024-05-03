import React from "react";
const TileRepo = () => {
  const response = [
    {
      status: "Repair",
      count: "10",
      icon: "/icons/repair.svg",
      ShadowColor: "#B51B75",
    },
    {
      status: "AutoCorrected",
      count: "46",
      icon: "/icons/settings.svg",
      ShadowColor: "blue",
    },
    {
      status: "Rejected",
      count: "69",
      icon: "/icons/rejected.svg",
      ShadowColor: "red",
    },
    {
      status: "Awating Approval",
      count: "288",
      icon: "/icons/awating.svg",
      ShadowColor: "orange",
    },
    {
      status: "Approved",
      count: "19",
      icon: "/icons/completed.svg",
      ShadowColor: "green",
    },
    {
      status: "Deactivated",
      count: "19",
      icon: "/icons/minus.svg",
      ShadowColor: "purple",
    },
  ];
  const handleStatusChange = (status) => {
    alert(status);
  };
  return (
    <div style={{ display: "flex" }}>
      {response.map((tile, index) => (
        <div
          key={index}
          style={{
            boxShadow: `0 0px 8px ${tile.ShadowColor}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px",
            margin: "20px",
            width: "130px",
            height: "150px",
            gap: "20px",
          }}
          onClick={() => {
            handleStatusChange(tile.status);
          }}
        >
          <h3>{tile.status}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: 500 }}>{tile.count}</p>
            <img src={tile.icon} alt={tile.status} height={30} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileRepo;
