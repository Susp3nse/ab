/* eslint-disable no-alert */
import React, { useState } from "react";
import {
  Button,
  Card,
  Center,
  Group,
  MultiSelect,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import allOSRSQuests, { skillOptions } from "@/utils/quests.js";

const TaskListBuilder = ({
  selectedBuilders,
  setSelectedBuilders,
}: {
  selectedBuilders: string[];
  setSelectedBuilders: (strs: string[]) => void;
}) => {
  // State to keep track of selected builder names

  // Handler to update the selected builders list
  const handleSelect = (value: string[] | null) => {
    if (value) {
      setSelectedBuilders(value);
    }
  };

  // Aggregated string (builder names, comma-separated)
  const aggregatedString = selectedBuilders.join(",");

  // Generate options for the dropdown from the quests data
  const stopOption = { value: "stop", label: "Stop" };
  const questOptions = Object.values(allOSRSQuests).map((quest) => ({
    value: quest.builderName,
    label: quest.fullName,
  }));
  const dropdownOptions = [...questOptions, ...skillOptions, stopOption];
  const copyToClipboard = () => {
    if (aggregatedString) {
      navigator.clipboard
        .writeText(aggregatedString)
        .then(() => {
          alert("Copied to clipboard!");
        })
        .catch((error) => {
          alert(`Failed to copy: ${error}`);
        });
    }
  };

  return (
    <Center style={{ flexDirection: "column" }}>
      <Title order={1}>AB Task Builder</Title>
      <Text size="lg" c="dimmed" style={{ marginBottom: "20px" }}>
        Select tasks to build a custom task list for AB
      </Text>

      {/* Dropdown with autocomplete */}
      <MultiSelect
        data={dropdownOptions}
        value={selectedBuilders}
        onChange={handleSelect}
        placeholder="Task Name"
        label="Select Tasks"
        searchable
        clearable
        hidePickedOptions
        style={{ width: "100%", maxWidth: 500 }}
      />

      {/* Display the aggregated string */}
      <Card
        style={{ marginTop: "20px", width: "100%", maxWidth: 500 }}
        shadow="sm"
        padding="lg"
        radius="md"
      >
        <Title order={4}>Custom Task List:</Title>
        <Text
          size="sm"
          c="dimmed"
          style={{
            wordWrap: "break-word",
            whiteSpace: "pre-wrap", // Ensure wrapping of text
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        >
          {aggregatedString || "No Tasks selected"}
        </Text>

        {/* Copy to clipboard button */}
        <Group style={{ marginTop: "10px" }}>
          <Tooltip label="Copy to clipboard" withArrow>
            <Button variant="light" onClick={copyToClipboard}>
              Copy
            </Button>
          </Tooltip>
        </Group>
      </Card>

      {/* Button to reset the selection */}
      <Button
        onClick={() => setSelectedBuilders([])}
        style={{ marginTop: "20px" }}
        variant="light"
        color="gray"
      >
        Reset
      </Button>
    </Center>
  );
};

export default TaskListBuilder;
