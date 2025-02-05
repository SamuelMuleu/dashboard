import Carousel from "react-material-ui-carousel";
import { TestimonialAuthor, TestimonialCard } from "./Testimonials.styles";
import { useMediaQuery } from "@mui/material";

const comments = [
  {
    text: "Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.",
    author: "Mas Parjono",
    profession: "UI Designer at Google",
  },
  {
    text: "Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.",
    author: "Samuel Muleu",
    profession: "developer fullstack",
  },
];

const Testimonials = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#E3F6EC",
          color: "#112D20",
          borderRadius: "8px",
          margin: "0px",
          boxShadow: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        },
      }}
      navButtonsWrapperProps={{
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: isLargeScreen ? "1rem" : "1rem",
          marginRight: isLargeScreen ? "24rem" : "10rem", 
        },
      }}
    >
      {comments.map((comment, index) => (
        <TestimonialCard key={index}>
          <TestimonialAuthor>&ldquo;{comment.text}&rdquo;</TestimonialAuthor>
          <p>
            <strong>{comment.author}</strong>
          </p>
          <p>{comment.profession}</p>
        </TestimonialCard>
      ))}
    </Carousel>
  );
};

export default Testimonials;
