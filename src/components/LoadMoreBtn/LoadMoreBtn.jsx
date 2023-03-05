import PropTypes from 'prop-types';
import { Button } from './LoadMoreBtn.styled';

export default function LoadMoreBtn({ showMoreImgs }) {
  return (
    <Button type="button" onClick={showMoreImgs}>
      Load More
    </Button>
  );
}

LoadMoreBtn.propTypes = {
  showMoreImgs: PropTypes.func.isRequired,
};
