import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://source.unsplash.com/random",
    title: "Breakfast",
    rows: 2,
    cols: 2
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Burger"
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Camera"
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Coffee",
    cols: 2
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Hats",
    cols: 2
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Honey",

    rows: 2,
    cols: 2
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Basketball"
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Fern"
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Mushrooms",
    rows: 2,
    cols: 2
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Tomato basil"
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Sea star"
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Bike",
    cols: 2
  }
];
