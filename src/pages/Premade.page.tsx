import { Button, Center, Title, Text, Grid } from "@mantine/core";

export default function PremadeLists() {
  const mepart2 = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,agility51,thieving50,crabrange60,regicide,rovingelves,sheepherder,mepone,meptwo,stop`;
  const taste = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,construction5,crafting48,agility45,herblore40,slayer38,crabattack60,crabstr50,crabdef40,aidmyreque,darknesshallowvale,tastehope,stop`;
  const base150 = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,stop`;
  const all = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,construction5,crafting48,agility45,herblore40,crabattack60,crabdef40,aidmyreque,darknesshallowvale,tastehope,agility51,thieving50,crabrange60,regicide,rovingelves,sheepherder,mepone,meptwo,childrensun,contact,watchtower,templeikov,enlightenedjourney,deserttreasureone,rfddwarf,rfdave,rfdguide,rfdpete,rfdskrach,rfdmonkey,stop`;

  const copyToClipboard = (str: string) => {
    navigator.clipboard
      .writeText(str)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        alert(`Failed to copy: ${error}`);
      });
  };
  return (
    <>
      <Center style={{ minHeight: "100%", flexDirection: "column" }}>
        <Title order={1}>AB Premade Lists</Title>
        <Text size="lg" c="dimmed" style={{ marginBottom: "20px" }}>
          Quickly Copy premade lists
        </Text>
        <Grid maw={700} miw={600}>
          <Grid.Col span="auto">
            <Button onClick={() => copyToClipboard(mepart2)}>
              Mourning's End
            </Button>
          </Grid.Col>
          <Grid.Col span="auto">
            <Button onClick={() => copyToClipboard(taste)}>
              A Taste Of Hope
            </Button>
          </Grid.Col>
          <Grid.Col span="auto">
            <Button onClick={() => copyToClipboard(base150)}>
              Basic 150 QP
            </Button>
          </Grid.Col>
          <Grid.Col span="auto">
            <Button onClick={() => copyToClipboard(all)}>
              All Quests Possible
            </Button>
          </Grid.Col>
        </Grid>
      </Center>
    </>
  );
}
