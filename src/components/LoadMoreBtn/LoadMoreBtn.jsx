import { Button } from './LoadMoreBtn.styled';

export default function LoadMoreBtn({ showMoreImgs }) {
  return (
    <Button type="button" onClick={showMoreImgs}>
      Load More
    </Button>
  );
}
