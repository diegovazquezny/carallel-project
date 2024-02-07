import randomColor from "@/utils.ts/random_color";
import Box from "@mui/material/Box/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface RecommendedItem {
  imageUrl: string;
  title: string;
  url: string;
  id: number;
}

interface RecommendedItems {
  feed: RecommendedItem[];
}

const recommendedFeed = [
  {
    imageUrl: "",
    title: "Decoding Dementia: A Caregiver's Handbook",
    url: `/article/${1}`,
    id: 1,
  },
  {
    imageUrl: "",
    title: "5 Tips for New Caregivers",
    url: `/article/${2}`,
    id: 2,
  },
  {
    imageUrl: "",
    title: "The Benefits of Pet Ownership",
    url: `/article/${3}`,
    id: 3,
  },
];

function RecommendedItems({ feed }: RecommendedItems) {
  return feed.map((reco) => (
    <Link
      href={reco.url}
      key={reco.id}
      sx={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Box
        width={220}
        height={150}
        marginRight={2}
        borderRadius={3}
        border={"1px solid black"}
        overflow={"hidden"}
        flexShrink={0}
      >
        <Box
          width={"100%"}
          height={70}
          sx={{ backgroundColor: randomColor() }}
        ></Box>
        <Box padding={1}>{reco.title}</Box>
      </Box>
    </Link>
  ));
}

export default function Recommended({
  title = "Recommended",
}: {
  title?: string;
}) {
  function fetchFeed() {
    // make API call to CMS or content server
    return recommendedFeed;
  }

  return (
    <Box mt={2}>
      <Typography component="div" variant="h5" mt={2}>
        {title}
      </Typography>
      <Box
        mt={3}
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
        }}
      >
        <RecommendedItems feed={fetchFeed()} />
      </Box>
    </Box>
  );
}
