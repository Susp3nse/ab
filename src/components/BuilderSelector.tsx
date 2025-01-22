import React, { useState } from "react";
import { Button, Select, Input, Group } from "@mantine/core";
import { builderItems } from "@/utils/quests.js";

export default function SkillTaskSelector({
  selectedBuilders,
  setSelectedBuilders,
}: {
  selectedBuilders: string[];
  setSelectedBuilders: (str: string[]) => void;
}) {
  const [selectedTask, setSelectedTask] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");

  // Handle input change, ensuring it's a number between 1 and 99
  const handleInputChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    // Only allow numbers between 1 and 99
    if (
      /^\d*$/.test(value) &&
      (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 99))
    ) {
      setInputValue(value);
    }
  };

  // Handle the button click to set selected builders
  const handleButtonClick = () => {
    if (selectedTask && inputValue) {
      setSelectedBuilders([
        ...selectedBuilders,
        `${selectedTask}${inputValue}`,
      ]);
      // Clear the input fields after the action
      setInputValue("");
    }
  };

  return (
    <Group justify="center" align="center">
      <Select
        value={selectedTask}
        onChange={setSelectedTask}
        data={builderItems.map((item) => ({
          value: item.builderName,
          label: item.label,
        }))}
        searchable
        placeholder="Pick a Task"
      />
      <Input
        value={inputValue}
        onChange={handleInputChange}
        maxLength={2} // Limit input to two digits (99)
        placeholder="1-99"
        type="number"
      />
      <Button onClick={handleButtonClick}>Add Task</Button>
    </Group>
  );
}
