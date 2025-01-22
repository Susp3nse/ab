import { useState } from "react";
import { IconChevronDown, IconChevronUp, IconPlus } from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Card,
  Center,
  Collapse,
  Grid,
  Group,
  Loader,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useUserData } from "@/utils/querys.js";
import TaskListBuilder from "../components/Builder.js";
import allOSRSQuests from "@/utils/quests.js";
import WikiUserData from "@/interfaces/WikiUserData.js";
import SkillTaskSelector from "@/components/BuilderSelector.js";

const AccountLookup = () => {
  const [userName, setUserName] = useState<string>("");
  const [fetchUser, setFetchUser] = useState<boolean>(false);

  const handleSearch = () => {
    if (userName.trim() === "") {
      return;
    } // Prevent search if no username entered
    if (userName) {
      setFetchUser(true);
    }
  };

  const handleOnChangeInput = (name: string) => {
    setFetchUser(false);
    setUserName(name);
  };

  return (
    <>
      <Center style={{ minHeight: "100%", flexDirection: "column" }}>
        <Title order={1}>OSRS Account Lookup</Title>
        <Text size="lg" c="dimmed" style={{ marginBottom: "20px" }}>
          Enter your account name to see your achievements, quests, and stats.
        </Text>

        {/* Search Box */}
        <TextInput
          value={userName}
          onChange={(event) => handleOnChangeInput(event.target.value)}
          placeholder="Enter OSRS username"
          label="Account Name"
          style={{ width: "100%", maxWidth: 400, marginBottom: "20px" }}
        />

        <Button onClick={handleSearch} style={{ marginBottom: "20px" }}>
          Search
        </Button>
        {fetchUser && <AccountInfo userName={userName} />}
      </Center>
    </>
  );
};

const AccountSkills = ({
  user,
  selectedBuilders,
  setSelectedBuilders,
}: {
  user: WikiUserData;
  selectedBuilders: string[];
  setSelectedBuilders: (str: string[]) => void;
}) => {
  const skillInfo = Object.entries(user.levels);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Center>
        <Title order={3}>{user.username}</Title>
      </Center>
      <Center>
        <Text size="sm" c="dimmed">{`Last updated: ${user.timestamp}`}</Text>
      </Center>

      {/* Skills Section (Non-Collapsible) */}
      <Center>
        <Title order={4} style={{ marginTop: "20px" }}>
          Skills
        </Title>
      </Center>
      <SimpleGrid
        cols={3}
        style={{ marginTop: "10px", padding: "16px", justifyItems: "center" }}
      >
        {skillInfo.map(([skillName, level]) => (
          <Text>
            {skillName}: {level}
          </Text>
        ))}
      </SimpleGrid>
      <Center>
        <SkillTaskSelector
          selectedBuilders={selectedBuilders}
          setSelectedBuilders={setSelectedBuilders}
        />
      </Center>
    </Card>
  );
};

const QuestCard = ({
  addQuestToList,
  selectedBuilders,
  quests,
}: {
  addQuestToList: (str: string | undefined) => void;
  selectedBuilders: string[];
  quests: {
    [questName: string]: number;
  };
}) => {
  const [questsOpened, setQuestsOpened] = useState(false);
  const mapQuestProgress = (status: number) => {
    switch (status) {
      case 0:
        return { text: "Not Started", color: "red" };
      case 1:
        return { text: "In Progress", color: "yellow" };
      case 2:
        return { text: "Completed", color: "green" };
      default:
        return { text: "Unknown", color: "gray" };
    }
  };
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group style={{ marginTop: "20px" }}>
          <Title order={4}>Quests</Title>
          <ActionIcon onClick={() => setQuestsOpened((prev) => !prev)}>
            {questsOpened ? (
              <IconChevronUp size={16} />
            ) : (
              <IconChevronDown size={16} />
            )}
          </ActionIcon>
        </Group>

        <Collapse in={questsOpened}>
          <Grid style={{ marginTop: "10px" }}>
            <Grid.Col span={12}>
              <ul>
                {Object.entries(quests).map(([quest, status]) => {
                  const { text, color } = mapQuestProgress(status);
                  const ABQuest = Object.entries(allOSRSQuests).find(
                    ([_, value]) => value.fullName === quest
                  );
                  const ABquestObj = ABQuest?.[1];
                  const inList = selectedBuilders.includes(
                    ABquestObj?.builderName ?? ""
                  );
                  const isImplemented = !!ABQuest;
                  const isCompletedOrImplemented =
                    !!ABQuest || text === "Completed";
                  return (
                    <ul key={quest}>
                      <Group>
                        <ActionIcon
                          disabled={!isImplemented || inList}
                          variant="filled"
                          size="sm"
                          aria-label="Settings"
                          onClick={() =>
                            addQuestToList(ABquestObj?.builderName)
                          }
                        >
                          <IconPlus
                            style={{ width: "70%", height: "70%" }}
                            stroke={1.5}
                          />
                        </ActionIcon>
                        <Text c={isCompletedOrImplemented ? color : "orange"}>
                          {quest}:{" "}
                          {isCompletedOrImplemented
                            ? text
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

const DiariesCard = ({ user }: { user: WikiUserData }) => {
  const [diariesOpened, setDiariesOpened] = useState(false);
  return (
    <>
      {" "}
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group style={{ marginTop: "20px" }}>
          <Title order={4}>Achievement Diaries</Title>
          <ActionIcon onClick={() => setDiariesOpened((prev) => !prev)}>
            {diariesOpened ? (
              <IconChevronUp size={16} />
            ) : (
              <IconChevronDown size={16} />
            )}
          </ActionIcon>
        </Group>

        <Collapse in={diariesOpened}>
          <Grid style={{ marginTop: "10px" }}>
            <Grid.Col span={12}>
              {Object.entries(user.achievement_diaries).map(
                ([region, difficulties]) => (
                  <div key={region}>
                    <Title order={5}>{region}</Title>
                    {Object.entries(difficulties).map(
                      ([difficulty, { complete, tasks }]) => {
                        const completedTasks = tasks.filter(
                          (task) => task === true
                        ).length;
                        const progressPercent =
                          (completedTasks / tasks.length) * 100;
                        return (
                          <Card
                            key={difficulty}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                            style={{ marginBottom: "10px" }}
                          >
                            <Title order={6}>{difficulty} Diaries</Title>
                            <Text>
                              {complete ? "Completed" : "Not Completed"}
                            </Text>
                            <Text>
                              Tasks: {completedTasks}/{tasks.length} (
                              {progressPercent.toFixed(2)}%)
                            </Text>
                          </Card>
                        );
                      }
                    )}
                  </div>
                )
              )}
            </Grid.Col>
          </Grid>
        </Collapse>
      </Card>
    </>
  );
};

const AccountInfo = ({ userName }: { userName: string }) => {
  const { data, isLoading, error } = useUserData(userName);
  const [selectedBuilders, setSelectedBuilders] = useState<string[]>([]);
  const addQuestToList = (name: string | undefined) => {
    if (name) {
      setSelectedBuilders([...selectedBuilders, name]);
    }
  };

  return (
    <>
      {/* Loading and Error State */}
      {isLoading && <Loader size="lg" />}
      {error && <Text color="red">Error: {(error as Error).message}</Text>}

      {/* Displaying User Data */}
      {data && (
        <Grid style={{ width: "100%", maxWidth: "95%" }} gutter="md">
          {/* Card for Username and Skills */}
          <Grid.Col span={6}>
            <Grid>
              <Grid.Col span={12}>
                {" "}
                <AccountSkills
                  user={data}
                  selectedBuilders={selectedBuilders}
                  setSelectedBuilders={setSelectedBuilders}
                ></AccountSkills>
              </Grid.Col>

              <Grid.Col span={12}>
                {/* Card for Quests */}
                <QuestCard
                  quests={data.quests}
                  selectedBuilders={selectedBuilders}
                  addQuestToList={addQuestToList}
                ></QuestCard>
              </Grid.Col>

              {/* Card for Achievement Diaries */}
              <Grid.Col span={12}>
                <DiariesCard user={data}></DiariesCard>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col span={6}>
            <Grid gutter="md">
              <Grid.Col span={12}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <TaskListBuilder
                    selectedBuilders={selectedBuilders}
                    setSelectedBuilders={setSelectedBuilders}
                  />
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      )}
    </>
  );
};

export default AccountLookup;
