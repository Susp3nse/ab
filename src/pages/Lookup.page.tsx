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
  Progress,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useUserData } from "@/utils/querys.js";
import QuestBuilderPage from "./Builder.js";
import allOSRSQuests from "@/utils/quests.js";

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
    <div>
      <Center style={{ minHeight: "100vh", flexDirection: "column" }}>
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
    </div>
  );
};

const AccountInfo = ({ userName }: { userName: string }) => {
  const { data, isLoading, error } = useUserData(userName);
  const [questsOpened, setQuestsOpened] = useState(false);
  const [diariesOpened, setDiariesOpened] = useState(false);
  const [selectedBuilders, setSelectedBuilders] = useState<string[]>([]);
  const addQuestToList = (name: string | undefined) => {
    if (name) {
      setSelectedBuilders([...selectedBuilders, name]);
    }
  };
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
      {/* Loading and Error State */}
      {isLoading && <Loader size="lg" />}
      {error && <Text color="red">Error: {(error as Error).message}</Text>}

      {/* Displaying User Data */}
      {data && (
        <Grid style={{ width: "100%", maxWidth: "95%" }} gutter="md">
          {/* Card for Username and Skills */}
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{data.username}</Title>
              <Text
                size="sm"
                color="dimmed"
              >{`Last updated: ${data.timestamp}`}</Text>

              {/* Skills Section (Non-Collapsible) */}
              <Title order={4} style={{ marginTop: "20px" }}>
                Skills
              </Title>
              <Grid style={{ marginTop: "10px" }}>
                {Object.entries(data.levels).map(([skillName, level]) => (
                  <Grid.Col span={12} key={skillName}>
                    <Group>
                      <Text>
                        {skillName}: {level}
                      </Text>
                      <Progress
                        value={(level / 99) * 100} // Assuming max level is 99 for skills
                        size="xs"
                        color="blue"
                        style={{ width: "80%" }}
                      />
                    </Group>
                  </Grid.Col>
                ))}
              </Grid>
            </Card>
          </Grid.Col>

          {/* Card for Quests and Diaries */}
          {/* Column for Quests and Diaries */}
          <Grid.Col span={6}>
            <Grid gutter="md">
              <Grid.Col span={12}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <QuestBuilderPage
                    selectedBuilders={selectedBuilders}
                    setSelectedBuilders={setSelectedBuilders}
                  />
                </Card>
              </Grid.Col>
              {/* Card for Quests */}
              <Grid.Col span={12}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group style={{ marginTop: "20px" }}>
                    <Title order={4}>Quests</Title>
                    <ActionIcon
                      onClick={() => setQuestsOpened((prev) => !prev)}
                    >
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
                          {Object.entries(data.quests).map(
                            ([quest, status]) => {
                              const { text, color } = mapQuestProgress(status);
                              const ABQuest = Object.entries(
                                allOSRSQuests
                              ).find(([_, value]) => value.fullName === quest);
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
                                    <Text
                                      c={
                                        isCompletedOrImplemented
                                          ? color
                                          : "orange"
                                      }
                                    >
                                      {quest}:{" "}
                                      {isCompletedOrImplemented
                                        ? text
                                        : "Not Implemented Yet"}
                                    </Text>
                                  </Group>
                                </ul>
                              );
                            }
                          )}
                        </ul>
                      </Grid.Col>
                    </Grid>
                  </Collapse>
                </Card>
              </Grid.Col>

              {/* Card for Achievement Diaries */}
              <Grid.Col span={12}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group style={{ marginTop: "20px" }}>
                    <Title order={4}>Achievement Diaries</Title>
                    <ActionIcon
                      onClick={() => setDiariesOpened((prev) => !prev)}
                    >
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
                        {Object.entries(data.achievement_diaries).map(
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
                                      <Title order={6}>
                                        {difficulty} Diaries
                                      </Title>
                                      <Text>
                                        {complete
                                          ? "Completed"
                                          : "Not Completed"}
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
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      )}
    </>
  );
};

export default AccountLookup;
