import React from "react";
import axios from "axios";
const TileRepo = () => {
  // const [response, setResponse] = useState();
  const response = [
    {
      status: "Repair",
      count: "10",
      icon_path: "/icons/repair.svg",
      color: "#B51B75",
    },
    {
      status: "AutoCorrected",
      count: "46",
      icon_path: "/icons/autoCorrected.svg",
      color: "blue",
    },
    {
      status: "Rejected",
      count: "69",
      icon_path: "/icons/rejected.svg",
      color: "red",
    },
    {
      status: "Awating Approval",
      count: "288",
      icon_path: "/icons/awating.svg",
      color: "orange",
    },
    {
      status: "Approved",
      count: "19",
      icon_path: "/icons/completed.svg",
      color: "green",
    },
    {
      status: "Deactivated",
      count: "19",
      icon_path: "/icons/minus.svg",
      color: "purple",
    },
  ];
  const handleStatusChange = (status) => {
    alert(status);
  };
  // const fetchData = async () => {
  //   try {
  //     const apiUrl = "http://localhost:8089/payment/status";
  //     const response = await axios.get(apiUrl);
  //     setResponse(response); // Update response state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData(); // Call fetchData when component mounts
  // }, []);
  return (
    <div style={{ display: "flex" }}>
      {response?.map((tile, index) => (
        <div
          key={index}
          style={{
            boxShadow: `0 0px 8px ${tile.color}`,
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
            <img src={tile.icon_path} alt={tile.status} height={30} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileRepo;
