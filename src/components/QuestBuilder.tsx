import { useState } from "react";
import OSRSQuests from "../utils/quests";

// Assuming OSRSQuests is already defined

export default function QuestForm() {
  const [selectedQuests, setSelectedQuests] = useState<string[]>([]);

  // Handle adding a quest dropdown
  const addQuestDropdown = () => {
    setSelectedQuests([...selectedQuests, ""]);
  };

  // Handle removing a quest dropdown
  const removeQuestDropdown = (index: number) => {
    const updatedQuests = [...selectedQuests];
    updatedQuests.splice(index, 1);
    setSelectedQuests(updatedQuests);
  };

  // Handle changing the selected quest in a dropdown
  const handleQuestChange = (index: number, value: string) => {
    const updatedQuests = [...selectedQuests];
    updatedQuests[index] = value;
    setSelectedQuests(updatedQuests);
  };

  // Aggregate selected quests information
  const aggregateQuestInfo = () => {
    const aggregatedSkills: Record<string, number> = {};
    let aggregatedQuestPoints = 0;
    let aggregatedCompletedQuests: string[] = [];
    let aggregatedItemsRequired: string[] = [];

    selectedQuests.forEach((questKey) => {
      const quest = OSRSQuests[questKey];
      if (quest) {
        // Merge skills: keep the highest required level for each skill
        Object.entries(quest.requirements.skills).forEach(([skill, level]) => {
          if (!aggregatedSkills[skill] || aggregatedSkills[skill] < level) {
            aggregatedSkills[skill] = level;
          }
        });

        // Sum up quest points
        aggregatedQuestPoints += quest.requirements.questPoints;

        // Merge completed quests (without duplicates)
        aggregatedCompletedQuests = [
          ...new Set([
            ...aggregatedCompletedQuests,
            ...quest.requirements.questsCompleted,
          ]),
        ];

        // Merge required items (without duplicates)
        aggregatedItemsRequired = [
          ...new Set([
            ...aggregatedItemsRequired,
            ...quest.requirements.itemsRequired,
          ]),
        ];
      }
    });

    return {
      aggregatedSkills,
      aggregatedQuestPoints,
      aggregatedCompletedQuests,
      aggregatedItemsRequired,
    };
  };

  const {
    aggregatedSkills,
    aggregatedQuestPoints,
    aggregatedCompletedQuests,
    aggregatedItemsRequired,
  } = aggregateQuestInfo();

  // Generate the final string based on selected quests
  const buildQuestString = () => {
    return selectedQuests.filter((quest) => quest).join(",");
  };

  return (
    <div>
      <h1>OSRS Quests Form</h1>

      {/* Dynamically render dropdowns */}
      {selectedQuests.map((quest, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <select
            value={quest}
            onChange={(e) => handleQuestChange(index, e.target.value)}
          >
            <option value="">Select a Quest</option>
            {Object.keys(OSRSQuests).map((questKey) => (
              <option key={questKey} value={questKey}>
                {OSRSQuests[questKey].fullName}
              </option>
            ))}
          </select>
          <button
            onClick={() => removeQuestDropdown(index)}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Button to add more dropdowns */}
      <button onClick={addQuestDropdown}>Add Quest</button>

      {/* Display selected quests string */}
      <div>
        <h2>Selected Quest String:</h2>
        <p>{buildQuestString()}</p>
      </div>

      {/* Aggregated quest information */}
      <div>
        <h2>Aggregated Quest Information:</h2>
        <p>
          <strong>Total Quest Points:</strong> {aggregatedQuestPoints}
        </p>
        <p>
          <strong>Skills Required:</strong>{" "}
          {Object.entries(aggregatedSkills)
            .map(([skill, level]) => `${skill}: ${level}`)
            .join(", ")}
        </p>
        <p>
          <strong>Completed Quests:</strong>{" "}
          {aggregatedCompletedQuests.join(", ")}
        </p>
        <p>
          <strong>Items Required:</strong> {aggregatedItemsRequired.join(", ")}
        </p>
      </div>
    </div>
  );
}
