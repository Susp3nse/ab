import { Button, Center, Title, Text, Grid } from "@mantine/core";

export default function PremadeLists() {
  const mepart2 = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,agility51,thieving50,crabrange60,regicide,rovingelves,sheepherder,mepone,meptwo,stop`;
  const taste = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,construction5,crafting48,agility45,herblore40,slayer38,crabattack60,crabstr50,crabdef40,aidmyreque,darknesshallowvale,tastehope,stop`;
  const base150 = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,stop`;
  const all = `prayer43,impcatcher,cooks,sheepshearer,restlessghost,witchspotion,runemysteries,xmarks,clientkourend,witchshouse,goblindip,dorics,princealirescue,dwarfcannon,waterfall,fightarena,plaguecity,treegnomevillage,biohazard,monksfriend,hazeelcult,deathplateau,demonslayer,merlincrystal,holygrail,knightssword,fletching10,touristtrap,grandtree,priestperil,naturespirit,ernestchicken,vampireslayer,romeojuliet,porcineofinterest,druidicritual,trollstronghold,makinghistory,blackknightfortress,gertrudes,rfdstart,rfdgoblin,varrockmuseum,thieving27,tribaltotem,thegolem,observatory,losttribe,elemworkshopone,shadowstorm,ugpass,firemaking30,seaslug,mountaindaughter,fishcontest,queenthieves,depthsdespair,piratestreasure,monkeymadness,monkeymadnessdareo,trollromance,itchyhelper,thefeud,junglepotion,barcrawl,scorpioncatcher,enterabyss,templeeye,horror,recruitmentdrive,digsite,wanted,woodcutting35,animalmag,lostcity,cooking30,taibaitrio,shilovillage,bigchompybirdhunting,ghostsahoy,murdermystery,searchofmyreque,onesmallfavour,magic39,zogreflesheaters,creaturefenkenstrain,sleepinggiants,tailoftwocats,belowicemountain,fremmytrials,bonevoyage,construction5,crafting48,agility45,herblore40,crabattack60,crabdef40,aidmyreque,darknesshallowvale,tastehope,agility51,thieving50,crabrange60,regicide,rovingelves,sheepherder,mepone,meptwo,childrensun,contact,watchtower,templeikov,enlightenedjourney,deserttreasureone,rfddwarf,rfdave,rfdguide,rfdpete,rfdskrach,rfdmonkey,stop`;
  const susp3nseVersion =
    "prayer43,cooks,sheepshearer,princealirescue,restlessghost,runemysteries,impcatcher,witchspotion,gertrudes,childrensun,varrockmuseum,dwarfcannon,waterfall,treegnomevillage,dorics,witchshouse,knightssword,fletching10,touristtrap,blackknightfortress,druidicritual,recruitmentdrive,goblindip,sleepinggiants,fightarena,plaguecity,monksfriend,hazeelcult,sheepherder,biohazard,construction10,thieving21,tribaltotem,deathplateau,merlincrystal,holygrail,murdermystery,grandtree,priestperil,naturespirit,cooking20,ghostsahoy,makinghistory,losttribe,elemworkshopone,agility35,itchyhelper,thegolem,woodcutting36,crafting31,lostcity,rfdstart,rfdgoblin,firemaking30,seaslug,fishcontest,rfddwarf,mountaindaughter,thieving30,thefeud,barcrawl,scorpioncatcher,digsite,enterabyss,xmarks,piratestreasure,clientkourend,queenthieves,depthsdespair,porcineofinterest,wanted,bonevoyage,mining42,watchtower,vampireslayer,fishing35,ernestchicken,demonslayer,thieving42,shadowstorm,crabdef36,horror,crabattack46,animalmag,creaturefenkenstrain,cooking30,bigchompybirdhunting,crabattack52,junglepotion,taibaitrio,shilovillage,agilitycanifis48,zogreflesheaters,observatory,crabrange38,woodcutting41,firemaking37,romeojuliet,crabdef41,searchofmyreque,trollstronghold,trollromance,firemaking42,crabstr43,woodcutting48,agilitycanifis57,ugpass,fremmytrials,contact,firemaking50,crabrange41,woodcutting56,templeikov,templeeye,crabattack56,onesmallfavour,woodcutting61,tailoftwocats,belowicemountain,monkeymadness,crafting40,farming41,enlightenedjourney,crabstr50,crabattack62,aidmyreque,darknesshallowvale,stop";
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
