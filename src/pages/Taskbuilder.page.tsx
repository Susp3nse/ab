import TaskListBuilder from "@/components/Builder.js";
import SkillTaskSelector from "@/components/BuilderSelector.js";
import allOSRSQuests, { AllWikiQuests } from "@/utils/quests.js";
import {
  ActionIcon,
  Card,
  Center,
  Collapse,
  Grid,
  Group,
  Title,
  Text,
  Input,
  Button,
  Box,
  Stack,
} from "@mantine/core";
import { IconChevronUp, IconChevronDown, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function NoAccountTaskBuilder() {
  const [selectedBuilders, setSelectedBuilders] = useState<string[]>([]);
  return (
    <>
      <TaskListBuilder
        selectedBuilders={selectedBuilders}
        setSelectedBuilders={setSelectedBuilders}
      />
      <Grid mt={10} justify="center">
        <Grid.Col span={6}>
          <Center>
            <Stack>
              <SkillBuilderCard
                selectedBuilders={selectedBuilders}
                setSelectedBuilders={setSelectedBuilders}
              ></SkillBuilderCard>
              <ImportList
                selectedBuilders={selectedBuilders}
                setSelectedBuilders={setSelectedBuilders}
              ></ImportList>
            </Stack>
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <QuestCard
              selectedBuilders={selectedBuilders}
              setSelectedBuilders={setSelectedBuilders}
            ></QuestCard>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
}
const ImportList = ({
  selectedBuilders,
  setSelectedBuilders,
}: {
  selectedBuilders: string[];
  setSelectedBuilders: (strs: string[]) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const hanldeOnClick = () => {
    const importList = inputValue.split(",");
    setSelectedBuilders([...selectedBuilders, ...importList]);
  };
  return (
    <>
      <Card
        style={{ marginTop: "20px", width: "100%", maxWidth: 500 }}
        shadow="sm"
        padding="lg"
        radius="md"
      >
        <Center>
          <Title pb={16} size="lg">
            Import Task List
          </Title>
        </Center>
        <Box>
          <Center>
            <Input
              size="sm"
              mr={10}
              onChange={(value) => setInputValue(value.target.value)}
            ></Input>
            <Button size="sm" onClick={hanldeOnClick}>
              Import
            </Button>
          </Center>
        </Box>
      </Card>
    </>
  );
};
const SkillBuilderCard = ({
  selectedBuilders,
  setSelectedBuilders,
}: {
  selectedBuilders: string[];
  setSelectedBuilders: (strs: string[]) => void;
}) => {
  return (
    <Card
      style={{ marginTop: "20px", width: "100%", maxWidth: 500 }}
      shadow="sm"
      padding="lg"
      radius="md"
    >
      <Center>
        <Title pb={16} size="lg">
          Easy Skill Selector
        </Title>
      </Center>

      <SkillTaskSelector
        selectedBuilders={selectedBuilders}
        setSelectedBuilders={setSelectedBuilders}
      />
    </Card>
  );
};
const QuestCard = ({
  setSelectedBuilders,
  selectedBuilders,
}: {
  setSelectedBuilders: (str: string[]) => void;
  selectedBuilders: string[];
}) => {
  const [questsOpened, setQuestsOpened] = useState(false);

  const handleAddQuest = (str?: string) => {
    if (str) {
      setSelectedBuilders([...selectedBuilders, str]);
    }
  };
  return (
    <>
      <Card
        style={{ marginTop: "20px", width: "100%", maxWidth: 700 }}
        shadow="sm"
        padding="lg"
        radius="md"
      >
        <Center>
          <Group p={10}>
            <Title order={4}>Quest List</Title>
            <ActionIcon onClick={() => setQuestsOpened((prev) => !prev)}>
              {questsOpened ? (
                <IconChevronUp size={16} />
              ) : (
                <IconChevronDown size={16} />
              )}
            </ActionIcon>
          </Group>
        </Center>
        <Collapse in={questsOpened}>
          <Grid style={{ marginTop: "10px" }}>
            <Grid.Col span={12}>
              <ul>
                {AllWikiQuests.map((questName) => {
                  const ABQuest = Object.entries(allOSRSQuests).find(
                    ([_, value]) => value.fullName === questName
                  );
                  const quest = ABQuest?.[1];
                  const inList = selectedBuilders.includes(
                    quest?.builderName ?? ""
                  );
                  const isImplemented = !!quest;
                  return (
                    <ul key={questName}>
                      <Group>
                        <ActionIcon
                          disabled={!isImplemented || inList}
                          variant="filled"
                          size="sm"
                          aria-label="Settings"
                          onClick={() => handleAddQuest(quest?.builderName)}
                        >
                          <IconPlus
                            style={{ width: "70%", height: "70%" }}
                            stroke={1.5}
                          />
                        </ActionIcon>

                        <Text c={isImplemented ? "green" : "orange"}>
                          {questName}:{" "}
                          {isImplemented
                            ? "Implemented"
                            : "Not Implemented Yet"}
                        </Text>
                      </Group>
                    </ul>
                  );
                })}
              </ul>
            </Grid.Col>
          </Grid>
        </Collapse>
      </Card>
    </>
  );
};
