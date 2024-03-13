import axios from "axios";
import { useEffect, useState } from "react";

const MatchesDisplay = ({ matches }) => {

  const [ matchedProfiles, setMatchedProfiles ] = useState(null);

  useEffect(() => {
    if (matches) { // Check if matches is defined
      const matchedUserIds = matches.map(({ user_id }) => user_id);

      const getMatches = async () => {
        try {
          const response = await axios.get('http://localhost:8000/users', {
            params: { userIds: JSON.stringify(matchedUserIds) }
          })
          setMatchedProfiles(response.data);
        } catch (err) {
          console.log(err);
        }
      }

      getMatches();
    }
  }, [matches]); // Add matches to the dependency array


  console.log(matchedProfiles);



  return (
    <div className="matches-display">
      
    </div>
  )
}

export default MatchesDisplay