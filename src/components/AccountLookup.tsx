import { useEffect, useState } from "react";
import WikiUserData from "../interfaces/WikiUserData";
import { useUserData } from "../utils/querys";
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "80%",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    transition: "background-color 0.3s",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
  error: {
    color: "red",
  },
  dataContainer: {
    marginTop: "15px",
  },
};

export default function AccountLookup() {
  const [accountName, setAccountName] = useState<string>("");
  const [fetchInfo, setFetchInfo] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleAsync = async () => {
    if (!accountName) {
      setError("Please enter an account name");
      return;
    }
    setError("");
    setFetchInfo(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>OSRS Account Lookup</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          name="accountName"
          placeholder="Enter RuneLite account name"
          value={accountName}
          onChange={(e) => {
            setFetchInfo(false);
            setAccountName(e.target.value);
          }}
          style={styles.input}
        />
        <button onClick={handleAsync} style={styles.button}>
          {"Find Me"}
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      {fetchInfo && <AccountInfo username={accountName}></AccountInfo>}
    </div>
  );
}

function AccountInfo({ username }: { username: string }) {
  const [data, setData] = useState<WikiUserData | null>(null);
  const query = useUserData(username);
  useEffect(() => {
    if (username) {
      setData(query.data);
    }
  }, [username, query.data]);
  return (
    <>
      {data && (
        <div>
          <h3>Account Info for {data.username}</h3>
          <p>
            <strong>Timestamp:</strong>{" "}
            {new Date(data.timestamp).toLocaleString()}
          </p>
          <div style={styles.dataContainer}>
            <h4>Quests:</h4>
            <ul>
              {Object.keys(data.quests).map((quest) => (
                <li key={quest}>
                  {quest}: {data.quests[quest]}
                </li>
              ))}
            </ul>
            <h4>Levels:</h4>
            <ul>
              {Object.keys(data.levels).map((skill) => (
                <li key={skill}>
                  {skill}: {data.levels[skill]}
                </li>
              ))}
            </ul>
            <h4>Combat Achievements:</h4>
            <ul>
              {data.combat_achievements.map((id) => (
                <li key={id}>ID: {id}</li>
              ))}
            </ul>
            <h4>Music Tracks:</h4>
            <ul>
              {Object.keys(data.music_tracks).map((track) => (
                <li key={track}>
                  {track}: {data.music_tracks[track] ? "Unlocked" : "Locked"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
