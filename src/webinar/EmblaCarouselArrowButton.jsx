import Props from 'prop-types';

export const Thumb = ({ selected, index, onClick }) => {

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        type="button"
        onClick={() => onClick(index)}
        className="embla-thumbs__slide__number min-w-[50px]"
      >
        {index + 1}
      </button>
    </div>
  )
}

Thumb.propTypes = {
  selected: Props.bool.isRequired,
  index: Props.number.isRequired,
  onClick: Props.func.isRequired,
};
