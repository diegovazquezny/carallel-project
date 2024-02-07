import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import randomColor from "@/utils.ts/random_color";

interface TopicsItem {
  imageUrl: string;
  title: string;
  url: string;
  id: number;
}

interface TopicsItems {
  topics: TopicsItem[];
}

const topicsFeed = [
  {
    imageUrl: "",
    title: "My family and relationships",
    url: "",
    id: 10,
  },
  {
    imageUrl: "",
    title: "Health care",
    url: "",
    id: 20,
  },
  {
    imageUrl: "",
    title: "Managing arrangements",
    url: "",
    id: 30,
  },
  {
    imageUrl: "",
    title: "Easy recipes",
    url: "",
    id: 40,
  },
  {
    imageUrl: "",
    title: "Vacation ideas",
    url: "",
    id: 50,
  },
];

function TopicsItems({ topics }: TopicsItems) {
  return topics.map((topic) => (
    <Box key={topic.id} width={140} marginRight={5}>
      <Box
        width={100}
        height={100}
        border={"1px solid black"}
        borderRadius={100}
        padding={1}
        sx={{
          backgroundColor: randomColor(),
        }}
        overflow={"auto"}
        mb={2}
      ></Box>
      <Typography textAlign={"center"} variant="body1">
        {topic.title}
      </Typography>
    </Box>
  ));
}

export default function Topics() {
  function fetchTopics() {
    // make API call to CMS or content server
    return topicsFeed;
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: 5,
        overflowX: "auto",
      }}
    >
      <TopicsItems topics={fetchTopics()} />
    </Box>
  );
}
