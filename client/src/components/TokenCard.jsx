function TokenCard({
  tokenNumber,
  status
}) {

  return (

    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px"
      }}
    >

      <h2>
        Token #{tokenNumber}
      </h2>

      <p>
        Status: {status}
      </p>

    </div>

  );

}

export default TokenCard;