import Box from "@mui/material/Box";
import randomColor from "@/utils.ts/random_color";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Recommended from "@/components/shared/recommended";

const articles = [
  {
    title: "Decoding Dementia: A Caregiver's Handbook",
    subtitle: "You are a caregiver",
    id: 1,
    imageUrl: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada odio libero, sed vehicula elit consectetur sed. Cras condimentum nisl vel lorem sagittis, eu mattis orci laoreet. Vestibulum pharetra bibendum risus non elementum. Aliquam a mauris nec sapien tincidunt vestibulum. Mauris ut sodales felis, non ullamcorper purus. Proin viverra sed velit ac viverra. Duis ultrices massa et orci gravida, sed varius erat varius. Curabitur sed sapien eu urna laoreet hendrerit a eget risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis semper maximus augue. Nunc rhoncus dolor eget nisl efficitur eleifend. Morbi ultricies sapien lacus, at laoreet eros mattis at.",
      "Cras libero tortor, vehicula dignissim nibh at, egestas eleifend turpis. Nunc vitae libero ex. Praesent sit amet dolor nisl. Nam condimentum rhoncus elit, lobortis sollicitudin erat elementum sed. Aenean non blandit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae malesuada dui. Pellentesque non nibh vel tellus pellentesque vestibulum. Cras et risus nunc. Morbi ipsum mauris, tempus ultrices velit non, sagittis tincidunt sem. Donec ac felis dignissim, porta ante a, fermentum ipsum. Proin in justo quis felis congue dignissim.",
      "Donec accumsan neque ut tortor sollicitudin euismod. Donec id elit sit amet sem viverra scelerisque. Pellentesque pulvinar dapibus lectus ut egestas. Donec nisl metus, efficitur id risus id, tempor interdum sapien. Cras varius fermentum tellus, ullamcorper imperdiet leo vulputate vel. Nullam vitae velit quam. Aliquam venenatis nunc sapien, faucibus pellentesque justo faucibus et. Cras rhoncus turpis est, at ornare lectus egestas nec. Phasellus blandit luctus lorem at dignissim. Nunc porttitor tellus in faucibus finibus. Curabitur quis lacus quis lorem faucibus varius consectetur sed ligula. Maecenas sed pellentesque urna. Suspendisse porta, magna non rutrum eleifend, nisi turpis accumsan ipsum, eget vehicula nisl quam eget nibh. Quisque semper rhoncus diam nec tincidunt. Mauris ut mauris eget eros tempor imperdiet sit amet eget felis.",
    ],
  },
  {
    title: "5 Tips for New Caregivers",
    subtitle: "You are a caregiver",
    id: 2,
    imageUrl: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada odio libero, sed vehicula elit consectetur sed. Cras condimentum nisl vel lorem sagittis, eu mattis orci laoreet. Vestibulum pharetra bibendum risus non elementum. Aliquam a mauris nec sapien tincidunt vestibulum. Mauris ut sodales felis, non ullamcorper purus. Proin viverra sed velit ac viverra. Duis ultrices massa et orci gravida, sed varius erat varius. Curabitur sed sapien eu urna laoreet hendrerit a eget risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis semper maximus augue. Nunc rhoncus dolor eget nisl efficitur eleifend. Morbi ultricies sapien lacus, at laoreet eros mattis at.",
      "Cras libero tortor, vehicula dignissim nibh at, egestas eleifend turpis. Nunc vitae libero ex. Praesent sit amet dolor nisl. Nam condimentum rhoncus elit, lobortis sollicitudin erat elementum sed. Aenean non blandit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae malesuada dui. Pellentesque non nibh vel tellus pellentesque vestibulum. Cras et risus nunc. Morbi ipsum mauris, tempus ultrices velit non, sagittis tincidunt sem. Donec ac felis dignissim, porta ante a, fermentum ipsum. Proin in justo quis felis congue dignissim.",
      "Donec accumsan neque ut tortor sollicitudin euismod. Donec id elit sit amet sem viverra scelerisque. Pellentesque pulvinar dapibus lectus ut egestas. Donec nisl metus, efficitur id risus id, tempor interdum sapien. Cras varius fermentum tellus, ullamcorper imperdiet leo vulputate vel. Nullam vitae velit quam. Aliquam venenatis nunc sapien, faucibus pellentesque justo faucibus et. Cras rhoncus turpis est, at ornare lectus egestas nec. Phasellus blandit luctus lorem at dignissim. Nunc porttitor tellus in faucibus finibus. Curabitur quis lacus quis lorem faucibus varius consectetur sed ligula. Maecenas sed pellentesque urna. Suspendisse porta, magna non rutrum eleifend, nisi turpis accumsan ipsum, eget vehicula nisl quam eget nibh. Quisque semper rhoncus diam nec tincidunt. Mauris ut mauris eget eros tempor imperdiet sit amet eget felis.",
    ],
  },
  {
    title: "The Benefits of Pet Ownership",
    subtitle: "You are a caregiver",
    id: 3,
    imageUrl: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada odio libero, sed vehicula elit consectetur sed. Cras condimentum nisl vel lorem sagittis, eu mattis orci laoreet. Vestibulum pharetra bibendum risus non elementum. Aliquam a mauris nec sapien tincidunt vestibulum. Mauris ut sodales felis, non ullamcorper purus. Proin viverra sed velit ac viverra. Duis ultrices massa et orci gravida, sed varius erat varius. Curabitur sed sapien eu urna laoreet hendrerit a eget risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis semper maximus augue. Nunc rhoncus dolor eget nisl efficitur eleifend. Morbi ultricies sapien lacus, at laoreet eros mattis at.",
      "Cras libero tortor, vehicula dignissim nibh at, egestas eleifend turpis. Nunc vitae libero ex. Praesent sit amet dolor nisl. Nam condimentum rhoncus elit, lobortis sollicitudin erat elementum sed. Aenean non blandit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae malesuada dui. Pellentesque non nibh vel tellus pellentesque vestibulum. Cras et risus nunc. Morbi ipsum mauris, tempus ultrices velit non, sagittis tincidunt sem. Donec ac felis dignissim, porta ante a, fermentum ipsum. Proin in justo quis felis congue dignissim.",
      "Donec accumsan neque ut tortor sollicitudin euismod. Donec id elit sit amet sem viverra scelerisque. Pellentesque pulvinar dapibus lectus ut egestas. Donec nisl metus, efficitur id risus id, tempor interdum sapien. Cras varius fermentum tellus, ullamcorper imperdiet leo vulputate vel. Nullam vitae velit quam. Aliquam venenatis nunc sapien, faucibus pellentesque justo faucibus et. Cras rhoncus turpis est, at ornare lectus egestas nec. Phasellus blandit luctus lorem at dignissim. Nunc porttitor tellus in faucibus finibus. Curabitur quis lacus quis lorem faucibus varius consectetur sed ligula. Maecenas sed pellentesque urna. Suspendisse porta, magna non rutrum eleifend, nisi turpis accumsan ipsum, eget vehicula nisl quam eget nibh. Quisque semper rhoncus diam nec tincidunt. Mauris ut mauris eget eros tempor imperdiet sit amet eget felis.",
    ],
  },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  function fetchArticle() {
    // make API call to CMS or content server
    return articles[+slug - 1];
  }
  const article = fetchArticle();

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        height={100}
        width={"100%"}
        borderRadius={3}
        mt={3}
        sx={{ backgroundColor: randomColor() }}
      ></Box>
      <Box display={"flex"} alignItems={"center"} mt={3} color={"#016400"}>
        <BookmarkBorderIcon />
        Bookmark
      </Box>
      <Typography variant="h5" mt={3}>
        {article.title}
      </Typography>
      <Typography mt={3} mb={3}>{article.body[0]}</Typography>
      <video width="280" height="200" controls>
        Your browser does not support the video tag.
      </video>
      <Typography variant="h6" mt={3} mb={3}>
        {article.subtitle}
      </Typography>
      <audio controls style={{ width: "100%" }}>
        Your browser does not support the audio tag.
      </audio>
      <Typography mt={3}>{article.body[1]}</Typography>
      <Typography mt={3}>{article.body[2]}</Typography>
      <Box
        mt={2}
        height={30}
        width={150}
        borderRadius={4}
        sx={{ backgroundColor: "#be7e55", color: "white" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        New to Caregiving
      </Box>
      <Box
        mt={1}
        height={30}
        width={120}
        borderRadius={4}
        sx={{ backgroundColor: "#be7e55", color: "white" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        What to Expect
      </Box>
      <Box>
        <ThumbUpOffAltIcon sx={{ marginTop: 3, marginRight: 6 }} />
        <ThumbDownOffAltIcon />
      </Box>
      <Box mt={2} mb={10}>
        <Recommended title="Related Resources" />
      </Box>
    </Box>
  );
}
