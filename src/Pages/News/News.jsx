import "./News.scss";
import "./News.scss";
import { Pagination } from "@mui/material";
import { LinkPages } from "../../Components";
import { News_box } from "../../ui";
const News = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="News">
        <div className="NewsPage_boxes">
          <News_box />
          <News_box />
          <News_box />
          <News_box />
          <News_box />
          <News_box />
          <News_box />
          <News_box />
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default News;
